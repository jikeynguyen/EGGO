import { Switch, SwitchProps } from 'antd';
import { BaseForm, IControlledFormProps } from '../base-form';


interface IAntdSwitchFormProps extends IControlledFormProps, SwitchProps {}

export default function AntdSwitchForm(props: IAntdSwitchFormProps) {
  const {
    control,
    label,
    description,
    name,
    optional,
    containerClassName,
    ...rest
  } = props;
  return (
    <BaseForm
      control={control}
      name={name}
      label={label}
      description={description}
      optional={optional}
      containerClassName={containerClassName}
      render={(field) => (
        <Switch
          checked={field.value}
          value={field.value}
          onChange={(value) => {
            field.onChange(value);
          }}
          {...rest}
        />
      )}
    />
  );
}
