import { InputNumber, InputNumberProps } from 'antd';
import { BaseForm, IControlledFormProps } from '../base-form';


interface IAntdInputNumberFormProps
  extends IControlledFormProps,
    InputNumberProps {
  name: string;
}

export default function AntdInputNumberNumberForm(
  props: IAntdInputNumberFormProps
) {
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
        <InputNumber
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
