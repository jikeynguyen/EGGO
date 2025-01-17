import { Input, InputProps } from 'antd';
import { BaseForm, IControlledFormProps } from '../base-form';


interface IAntdInputFormProps extends IControlledFormProps, InputProps {
  name: string;
}

export default function AntdInputForm(props: IAntdInputFormProps) {
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
        <Input
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
