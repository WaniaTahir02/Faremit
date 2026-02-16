import React from "react";

const Button = ({
  icon,
  text,
  className = "",
  onClick,
  type = "button",
  iconPosition = "right", // optional: "left" or "right"
  iconSize = { w: 24, h: 24 }, // default icon size in px
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center justify-center gap-2 rounded-full px-4 py-2 transition ${className}`}
    >
      {icon && iconPosition === "left" && (
        <img
          src={icon}
          alt="icon"
          className={`object-contain`}
          style={{ width: iconSize.w, height: iconSize.h }}
        />
      )}

      {text && <span className="text-sm md:text-base font-medium">{text}</span>}

      {icon && iconPosition === "right" && (
        <img
          src={icon}
          alt="icon"
          className="object-contain"
          style={{ width: iconSize.w, height: iconSize.h }}
        />
      )}
    </button>
  );
};

export default Button;
