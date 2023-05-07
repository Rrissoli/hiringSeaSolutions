import { createFromIconfontCN } from '@ant-design/icons';
import Predio from "../../../../../public/assets/Predio.svg"
const MyIcon = createFromIconfontCN({
  scriptUrl: {Predio},
  extraCommonProps: {
    className: 'my-custom-icon',
  },
});

export default MyIcon;
