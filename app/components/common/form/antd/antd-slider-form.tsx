import { Slider, SliderSingleProps } from 'antd';
import { BaseForm, IControlledFormProps } from '../base-form';


interface IAntdSliderFormProps
  extends IControlledFormProps,
    SliderSingleProps {}

export default function AntdSliderForm(props: IAntdSliderFormProps) {
  const { control, label, description, name, optional, ...rest } = props;
  return (
    <BaseForm
      control={control}
      name={name}
      label={label}
      description={description}
      optional={optional}
      render={(field) => (
        <Slider onChange={field.onChange} value={field.value} {...rest} />
      )}
    />
  );
}
