import { GoSync } from "react-icons/go";
import { FiSettings } from "react-icons/fi";
import { MdOutlineManageAccounts } from "react-icons/md";
import { useEffect, useRef } from "react";
const Account = () => {
  return (
    <div className="account-setting g-0 ps-1">
      <div>
        <li>
          <MdOutlineManageAccounts className="icon me-2" />
          Manage Accounts
        </li>
        <li>
          <FiSettings className="icon me-2" />
          Setting
        </li>
        <li>
          <GoSync className="icon me-2" />
          Syncing
        </li>
      </div>
    </div>
  );
};
export default Account;
