import { FormEvent, useState } from "react";

import Btn from "../Btn";
import CustomInput from "../CustomInput";

interface Form {
  name: string;
  email: string;
  projectsDetails: string;
}

const FooterForm = () => {
  const [form, setForm] = useState<Form>({
    name: "",
    email: "",
    projectsDetails: "",
  });
  return (
    <form className="flex flex-col gap-12 min-w-[540px]" onSubmit={(e: FormEvent) => e.preventDefault()}>
      <div className="flex flex-col gap-10">
        <div className="flex items-center gap-6">
          <CustomInput
            required
            name="Name"
            value={form.name}
            type="text"
            setter={(value) => setForm({ ...form, name: value })}
          />
          <CustomInput
            required
            name="Email"
            value={form.email}
            type="email"
            setter={(value) => setForm({ ...form, email: value })}
          />
        </div>
        <div>
          <CustomInput
            required
            name="Project details"
            value={form.projectsDetails}
            type="text"
            setter={(value) => setForm({ ...form, projectsDetails: value })}
          />
        </div>
      </div>
      <Btn name="Submit" btn onClick={() => console.log(form)} />
    </form>
  );
};
export default FooterForm;
