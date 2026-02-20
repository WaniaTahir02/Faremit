// Settings.jsx
import React, { useState } from "react";
import emailIcon from "../../assets/dashboard/email.png";
import passwordIcon from "../../assets/dashboard/password.png";
import bellIcon from "../../assets/dashboard/bell.png";
import deviceIcon from "../../assets/dashboard/device.png";
import deactivateIcon from "../../assets/dashboard/deactivate.png";

const SettingItem = ({ icon, title }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-lg mb-3">
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between p-4 cursor-pointer "
      >
        <div className="flex items-center gap-3">
          {/* ICON IMAGE */}
          <div className="bg-indigo-100 p-2 rounded-full">
            <img src={icon} alt={title} className="h-5 w-5" />
          </div>

          <p className="font-medium text-[#0C0F2C]">
            {title}
          </p>
        </div>

        <span className="text-gray-400 text-sm">
          {open ? "⌵" : "⌵"}
        </span>
      </div>

      {open && (
        <div className="px-4 pb-4 text-sm text-gray-500">
          Content 
        </div>
      )}
    </div>
  );
};

export default function Settings() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-[#0C0F2C] mb-6">
        Settings
      </h2>

      <SettingItem icon={emailIcon} title="Change Email Address" />
      <SettingItem icon={passwordIcon} title="Change Password" />
      <SettingItem icon={bellIcon} title="Notifications" />
      <SettingItem icon={deviceIcon} title="Device History" />
      <SettingItem icon={deactivateIcon} title="Deactivate Account" />
    </div>
  );
}