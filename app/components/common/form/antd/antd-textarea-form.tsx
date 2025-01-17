import { Input } from 'antd';
import { TextAreaProps } from 'antd/es/input';
import { BaseForm, IControlledFormProps } from '../base-form';


const { TextArea } = Input;
interface IAntdTextAreaFormProps extends IControlledFormProps, TextAreaProps {
  name: string;
}

export default function AntdTextAreaForm(props: IAntdTextAreaFormProps) {
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
        <TextArea
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
