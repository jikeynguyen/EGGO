import type { DatePickerProps } from 'antd';
import { DatePicker } from 'antd';
import { BaseForm, IControlledFormProps } from '../base-form';


interface IAntdDatePickerFormProps
  extends IControlledFormProps,
    DatePickerProps {
  name: string;
}

export default function AntdDatePickerForm(props: IAntdDatePickerFormProps) {
  const { control, label, description, name, optional, ...rest } = props;

  return (
    <BaseForm
      control={control}
      name={name}
      label={label}
      description={description}
      optional={optional}
      render={(field) => (
        <DatePicker onChange={field.onChange} value={field.value} {...rest} />
      )}
    />
  );
}
