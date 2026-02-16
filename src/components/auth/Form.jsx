export default function Form({ title, subtitle, children, buttonText, onSubmit }) {
  return (
    <form
      onSubmit={onSubmit}
      className="w-full max-w-md space-y-4"
    >
      
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">
          {title}
        </h1>

        {subtitle && (
          <p className="text-sm text-gray-500 mt-1">
            {subtitle}
          </p>
        )}
        
      </div>

      {children}

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
      >
        {buttonText}
      </button>
    </form>
    
  );
}
