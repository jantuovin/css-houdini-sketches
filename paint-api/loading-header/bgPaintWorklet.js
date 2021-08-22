registerPaint('bgPaint', class {
  static get contextOptions() {
    return { alpha: true };
  }

  static get inputProperties() { return ['--boxColor', '--widthPercentage']; }

  paint(ctx, size, props) {
    ctx.fillStyle = props.get('--boxColor');
    ctx.fillRect(0, 0, size.width * (props.get('--widthPercentage') / 100), size.height);
  }
});
