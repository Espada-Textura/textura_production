import { toast } from "react-toastify";
import {
  HiExclamationCircle,
  HiCheckCircle,
  HiInformationCircle,
  HiXCircle,
} from "react-icons/hi";

const Warning = ({ title, children }) => {
  return (
    <div className="text-warning-100 flex flex-col gap-1">
      <div className="text-base">{title}</div>
      <div className="text-secondary-100 font-normal">{children}</div>
    </div>
  );
};

const Success = ({ title, children }) => {
  return (
    <div className="text-success-100 flex flex-col gap-1">
      <div className="text-base">{title}</div>
      <div className="text-secondary-100 font-normal">{children}</div>
    </div>
  );
};

const Error = ({ title, children }) => {
  return (
    <div className="text-error-100 flex flex-col gap-1">
      <div className="text-base">{title}</div>
      <div className="text-secondary-100 font-normal">{children}</div>
    </div>
  );
};

const Info = ({ title, children }) => {
  return (
    <div className="text-info-100 flex flex-col gap-1">
      <div className="text-base">{title}</div>
      <div className="text-secondary-100 font-normal">{children}</div>
    </div>
  );
};

export const useWarningNotify = (title, children) => {
  return toast.warn(<Warning title={title} children={children} />, {
    icon: () => <HiExclamationCircle className="w-7 h-7 text-warning-100" />,
  });
};

export const useSucessNotify = (title, children) => {
  return toast.success(<Success title={title} children={children} />, {
    icon: () => <HiCheckCircle className="w-7 h-7 text-success-100" />,
  });
};

export const useInfoNotify = (title, children) => {
  return toast.success(<Success title={title} children={children} />, {
    icon: () => <HiInformationCircle className="w-7 h-7 text-info-100" />,
  });
};

export const useErrorNotify = (title, children) => {
  return toast.success(<Success title={title} children={children} />, {
    icon: () => <HiXCircle className="w-7 h-7 text-error-100" />,
  });
};
