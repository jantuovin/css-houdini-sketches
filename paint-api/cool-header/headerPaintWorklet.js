registerPaint('headerHighlight', class {
  /*
    define if alphatransparency  is allowed alpha
    is set to true by default. If set to false, all
    colors used on the canvas will be fully opaque
  */
  static get contextOptions() {
    return { alpha: true };
  }

  /*
    use this function to retrieve any custom properties (or regular properties, such as 'height')
    defined for the element, return them in the specified array
  */
  static get inputProperties() { return ['--boxColor', '--widthSubtractor']; }

  /*
    this doesn't seem to work...
    static get inputArguments() { return ['*']; }
  */

  /*
    ctx is the 2D drawing context
    a subset of the HTML5 Canvas API.
  */
  paint(ctx, size, props, args) {
    /*
      ctx -> drawing context
      size -> paintSize: width and height
      props -> properties: get() method
      args  -> list of arguments set when calling the paint() function in the css
    */

    ctx.fillStyle = props.get('--boxColor');
    ctx.fillRect(0, size.height / 3, size.width * 0.4 - props.get('--widthSubtractor'), size.height * 0.6);

    /*
      this doesn't seem to work...
      const addLine = args.length > 0 ? args[0].toString() : undefined;
      if (addLine) {
        ctx.fillRect(0, size.height / 3, 1, size.height * 0.6);
      }
    */
  }
});
