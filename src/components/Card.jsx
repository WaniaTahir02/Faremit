import React from "react";
const Card = ({
  stepImage,
  title,
  description,
  bottomImage,
  className = "",
  bottomImageWrapperClass = "",
  bgColor,
  bgImg,
  subtitle,
  titleAtTop = false,
}) => {
  return (
    <div
      className={`relative rounded-xl shadow-lg p-6 flex flex-col justify-between h-full overflow-hidden ${bgColor || "bg-white"} ${className}`}
    >
      {/* Background image layer */}
      {bgImg && (
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${bgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            // filter: "blur(1px)",
          }}
        >
          {/* Optional overlay to make text readable */}
          <div className="absolute inset-0 bg-white/30"></div>
        </div>
      )}

      {/* Card content (not blurred) */}
      <div className="relative z-10 flex flex-col justify-between h-full">
        {/* Optional step/top image */}
        {stepImage && <img src={stepImage} alt="step" className="w-10 h-10 mb-4" />}

        {/* Title at top */}
        {title && titleAtTop && <h3 className="text-xl font-semibold mb-2">{title}</h3>}

        {/* Description */}
        {description && <p className="relative z-10">{description}</p>}

        {/* Title & subtitle at bottom */}
        {title && !titleAtTop && (
          <div className="mt-4">
            <span className="font-semibold block">{title}</span>
            {subtitle && <span className="text-sm">{subtitle}</span>}
          </div>
        )}

        {/* Bottom image */}
   {bottomImage && (
  <div className={`mt-4 ${bottomImageWrapperClass}`}>
    <img
      src={bottomImage}
      alt={title}
      className="w-full max-h-40 object-contain"
    />
  </div>
)}


      </div>
    </div>
  );
};

export default Card;
