import React from "react";
import Button from "../Button";
import Checkbox from "../Checkbox";

function QuickAccess() {
  return (
    <>
      <div className="p-2.5">
        <div className="font-bold text-sm">Quick Access</div>
        <div className="pt-2.5">
          <Button label="Add New Initiative" />
        </div>
        <div className="pt-2.5">
          <Button label="Team Update Page" variant="secondary" />
        </div>
        <div className="pt-2.5">
          <Checkbox label="Light / Dark" variant="secondary" />
        </div>
        <div className="mt-2.5 border-b-1 border-dashed border-gray-300"></div>
      </div>
    </>
  );
}

export default QuickAccess;
