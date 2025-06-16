import React, { useEffect, useRef } from 'react';

interface DynamicBlobProps {
  color: string;
  width: number;
  height: number;
}

class Blob {
  points: Point[] = [];
  _canvas?: HTMLCanvasElement;
  ctx?: CanvasRenderingContext2D;
  _color?: string;
  _points?: number;
  _radius?: number;
  _position?: { x: number; y: number };
  _running?: boolean;
  mousePos?: { x: number; y: number };

  constructor() {
    this.points = [];
  }

  init() {
    for (let i = 0; i < this.numPoints; i++) {
      let point = new Point(this.divisional * (i + 1), this);
      this.push(point);
    }
  }

  render() {
    if (!this.canvas || !this.ctx) return;
    
    let canvas = this.canvas;
    let ctx = this.ctx;
    let pointsArray = this.points;
    let points = this.numPoints;
    let center = this.center;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    pointsArray[0].solveWith(pointsArray[points - 1], pointsArray[1]);

    let p0 = pointsArray[points - 1].position;
    let p1 = pointsArray[0].position;
    let _p2 = p1;

    ctx.beginPath();
    ctx.moveTo(center.x, center.y);
    ctx.moveTo((p0.x + p1.x) / 2, (p0.y + p1.y) / 2);

    for (let i = 1; i < points; i++) {
      pointsArray[i].solveWith(
        pointsArray[i - 1],
        pointsArray[i + 1] || pointsArray[0]
      );

      let p2 = pointsArray[i].position;
      var xc = (p1.x + p2.x) / 2;
      var yc = (p1.y + p2.y) / 2;
      ctx.quadraticCurveTo(p1.x, p1.y, xc, yc);

      p1 = p2;
    }

    var xc = (p1.x + _p2.x) / 2;
    var yc = (p1.y + _p2.y) / 2;
    ctx.quadraticCurveTo(p1.x, p1.y, xc, yc);

    ctx.fillStyle = this.color;
    ctx.fill();

    requestAnimationFrame(this.render.bind(this));
  }

  push(item: Point) {
    if (item instanceof Point) {
      this.points.push(item);
    }
  }

  set color(value: string) {
    this._color = value;
  }
  get color() {
    return this._color || '#000000';
  }

  set canvas(value: HTMLCanvasElement) {
    if (value instanceof HTMLElement && value.tagName.toLowerCase() === 'canvas') {
      this._canvas = value;
      this.ctx = this._canvas.getContext('2d') || undefined;
    }
  }
  get canvas() {
    return this._canvas!;
  }

  set numPoints(value: number) {
    if (value > 2) {
      this._points = value;
    }
  }
  get numPoints() {
    return this._points || 28; // Increased points for smoother curves without being too dynamic
  }

  set radius(value: number) {
    if (value > 0) {
      this._radius = value;
    }
  }
  get radius() {
    return this._radius || 200; // Increased default radius for bigger size
  }

  set position(value: { x: number; y: number }) {
    if (typeof value == 'object' && value.x && value.y) {
      this._position = value;
    }
  }
  get position() {
    return this._position || { x: 0.5, y: 0.5 };
  }

  get divisional() {
    return (Math.PI * 2) / this.numPoints;
  }

  get center() {
    return {
      x: this.canvas.width * this.position.x,
      y: this.canvas.height * this.position.y,
    };
  }

  set running(value: boolean) {
    this._running = value === true;
  }
  get running() {
    return this._running !== false;
  }
}

class Point {
  parent: Blob;
  azimuth: number;
  _components: { x: number; y: number };
  _acceleration?: number;
  _speed?: number;
  _radialEffect?: number;
  _elasticity?: number;
  _friction?: number;

  constructor(azimuth: number, parent: Blob) {
    this.parent = parent;
    this.azimuth = Math.PI - azimuth;
    this._components = {
      x: Math.cos(this.azimuth),
      y: Math.sin(this.azimuth),
    };

    this.acceleration = -0.4 + Math.random() * 0.8; // Reduced variation for more stable movement
  }

  solveWith(leftPoint: Point, rightPoint: Point) {
    this.acceleration =
      (-0.3 * this.radialEffect +
        (leftPoint.radialEffect - this.radialEffect) +
        (rightPoint.radialEffect - this.radialEffect)) *
        this.elasticity -
      this.speed * this.friction;
  }

  set acceleration(value: number) {
    if (typeof value == 'number') {
      this._acceleration = value;
      this.speed += this._acceleration * 2;
    }
  }
  get acceleration() {
    return this._acceleration || 0;
  }

  set speed(value: number) {
    if (typeof value == 'number') {
      this._speed = value;
      this.radialEffect += this._speed * 5;
    }
  }
  get speed() {
    return this._speed || 0;
  }

  set radialEffect(value: number) {
    if (typeof value == 'number') {
      this._radialEffect = value;
    }
  }
  get radialEffect() {
    return this._radialEffect || 0;
  }

  get position() {
    // Create a horizontal bean shape by using different radii for x and y
    const radiusX = (this.parent.radius + this.radialEffect) * 1.3; // Wider width
    const radiusY = (this.parent.radius + this.radialEffect) * 0.8; // A little bigger vertically
    
    return {
      x: this.parent.center.x + this.components.x * radiusX,
      y: this.parent.center.y + this.components.y * radiusY,
    };
  }

  get components() {
    return this._components;
  }

  set elasticity(value: number) {
    if (typeof value === 'number') {
      this._elasticity = value;
    }
  }
  get elasticity() {
    return this._elasticity || 0.0015; // Reduced from 0.002 for less buggy behavior
  }

  set friction(value: number) {
    if (typeof value === 'number') {
      this._friction = value;
    }
  }
  get friction() {
    return this._friction || 0.008; // Increased friction to reduce excessive movement
  }
}

const DynamicBlob: React.FC<DynamicBlobProps> = ({ color, width, height }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const blobRef = useRef<Blob | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    canvas.width = width;
    canvas.height = height;

    const blob = new Blob();
    blobRef.current = blob;

    blob.canvas = canvas;
    blob.color = color;
    // Make the blob bigger with horizontal bean shape
    blob.radius = Math.min(width, height) * 0.45; // Slightly reduced for better proportions
    blob.position = { x: 0.5, y: 0.5 };
    blob.numPoints = 28; // More points for smoother curves
    blob.init();
    blob.render();

    let oldMousePoint = { x: 0, y: 0 };
    let hover = false;

    const mouseMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;

      let pos = blob.center;
      let diff = { x: clientX - pos.x, y: clientY - pos.y };
      
      // Account for horizontal elliptical shape in distance calculation
      let normalizedDiff = {
        x: diff.x / (blob.radius * 1.3), // Width factor
        y: diff.y / (blob.radius * 0.8)  // Height factor
      };
      let dist = Math.sqrt(normalizedDiff.x * normalizedDiff.x + normalizedDiff.y * normalizedDiff.y);
      let angle = null;

      blob.mousePos = { x: pos.x - clientX, y: pos.y - clientY };

      if (dist < 1 && hover === false) {
        let vector = { x: clientX - pos.x, y: clientY - pos.y };
        angle = Math.atan2(vector.y, vector.x);
        hover = true;
      } else if (dist > 1 && hover === true) {
        let vector = { x: clientX - pos.x, y: clientY - pos.y };
        angle = Math.atan2(vector.y, vector.x);
        hover = false;
      }

      if (typeof angle == 'number') {
        let nearestPoint: Point | null = null;
        let distanceFromPoint = 100;

        blob.points.forEach((point) => {
          if (Math.abs(angle! - point.azimuth) < distanceFromPoint) {
            nearestPoint = point;
            distanceFromPoint = Math.abs(angle! - point.azimuth);
          }
        });

        if (nearestPoint) {
          let strength = { 
            x: oldMousePoint.x - clientX, 
            y: oldMousePoint.y - clientY 
          };
          let strengthMagnitude = Math.sqrt((strength.x * strength.x) + (strength.y * strength.y)) * 8; // Reduced sensitivity
          if (strengthMagnitude > 80) strengthMagnitude = 80; // Reduced max strength
          (nearestPoint as Point).acceleration = (strengthMagnitude / 80) * (hover ? -1 : 1);
        }
      }

      oldMousePoint.x = clientX;
      oldMousePoint.y = clientY;
    };

    canvas.addEventListener('pointermove', mouseMove);

    return () => {
      canvas.removeEventListener('pointermove', mouseMove);
    };
  }, [color, width, height]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0"
      style={{ touchAction: 'none' }}
    />
  );
};

export default DynamicBlob;
