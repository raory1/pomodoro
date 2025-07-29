import { IconPlayerPlay } from "@tabler/icons-react";
import { Button } from "../Button";
import { CycleTimeline } from "../CycleTimeline";
import { Input } from "../Input";

export function MainForm() {
  return (
    <form className="form">
      <div className="formRow">
        <Input
          id={'task'}
          label={'task'}
          required={false}
          placeholder="Type your task"
        />
      </div>
      <div className="formRow">
        <CycleTimeline />
      </div>
      <div className="formRow">
        <Button
          title={'Start focusing'}
          variant="default"
          icon={<IconPlayerPlay stroke={1.5} />}
        />
        {/* <Button title={"Give up"} variant='alert' icon={<IconPlayerStop stroke={1.5} />} /> */}
      </div>
    </form>
  );
}
