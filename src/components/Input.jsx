import { forwardRef } from "react";

const Input = forwardRef(function Input ({ title, isTextarea, ...props }, ref) {
  const classes =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
  return (
    <div>
      <p className="flex flex-col my-4 gap-1">
        <label className="text-sm font-bold uppercase text-stone-700">
          {title}
        </label>
        {isTextarea && <textarea ref={ref} className={classes} {...props}></textarea>}
        {!isTextarea && <input ref={ref} className={classes} {...props} />}
      </p>
    </div>
  );
});

export default Input;
