import React from "react";
import Button from "../Button";

function SyncComponent() {
  return (
    <>
      <div className="pt-2 px-2">
        <div className="font-bold text-sm">Sync & Files</div>
        <div className="pt-2">
          <Button label="Pull From Sheets" />
        </div>
        <div className="pt-2">
          <Button label="Push To Sheets" />
        </div>
        <div className="pt-2">
          <Button label="Export CSV" />
        </div>
        <div className="pt-2">
          <Button label="Import CSV" />
        </div>
      </div>
    </>
  );
}

export default SyncComponent;
