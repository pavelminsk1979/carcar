import { SVGProps, Ref, forwardRef, memo } from 'react';
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 -960 960 960"
    ref={ref}
    {...props}
  >
    <path d="m560-200 160-160-56-56-64 62v-166h-80v166l-64-62-56 56 160 160ZM360-440h80v-166l64 62 56-56-160-160-160 160 56 56 64-62v166ZM480-72q-85 0-159-32-75-32-130-87t-87-130q-32-74-32-159t32-159q32-75 87-130t130-87q74-32 159-32t159 32q75 32 130 87t87 130q32 74 32 159t-32 159q-32 75-87 130t-130 87q-74 32-159 32Zm0-91q133 0 225-92t92-225q0-133-92-225t-225-92q-133 0-225 92t-92 225q0 133 92 225t225 92Zm0-317Z" />
  </svg>
);
const ForwardRef = forwardRef(SvgComponent);

export const Krugstrelki = memo(ForwardRef);
