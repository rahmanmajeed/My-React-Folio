import Icons from '../../assets/icons.svg';

function Icon({ icon, color, size=4, style }) {
  // `use` means go find the chunk or clone of SVG that is given here
  //   <!-- `<use>` shape defined in an EXTERNAL RESOURCE -->
  /**
   * ...
   *    <use xlink:href="defs.svg#icon-1"></use>
   * ...
   */

  return (
    <>
      <svg className={`${style}`} fill={color} width={size} height={size}>
        <use xlinkHref={`${Icons}#icon-${icon}`} />
      </svg>
    </>
  );
}

export default Icon;
