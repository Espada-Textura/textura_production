import { toast } from "react-toastify";
import {
  HiExclamationCircle,
  HiCheckCircle,
  HiInformationCircle,
  HiXCircle,
} from "react-icons/hi";

const containerId = "notify";

const Notify = ({ title, children, typeColor }) => (
  <>
    <div className={`${typeColor} flex flex-col gap-1`}>
      <span className="text-ellipsis">{title}</span>
      <div className="text-secondary-100 font-normal">{children}</div>
    </div>
  </>
);

export const useWarningNotify = (title, children) => {
  return toast.warn(
    <Notify title={title} children={children} typeColor={"text-warning-100"} />,
    {
      icon: () => <HiExclamationCircle className="w-7 h-7 text-warning-100" />,
      containerId: containerId,
      toastId: `warning ${children}`,
    }
  );
};

export const useSuccessNotify = (title, children) => {
  return toast.success(
    <Notify title={title} children={children} typeColor={"text-success-100"} />,
    {
      icon: () => <HiCheckCircle className="w-7 h-7 text-success-100" />,
      containerId: containerId,
      toastId: `success ${children}`,
    }
  );
};

export const useInfoNotify = (title, children) => {
  return toast.info(
    <Notify title={title} children={children} typeColor="text-info-100" />,
    {
      icon: () => <HiInformationCircle className="w-7 h-7 text-info-100" />,
      containerId: containerId,
      toastId: `info ${children}`,
    }
  );
};

export const useErrorNotify = (title, children) => {
  return toast.error(
    <Notify title={title} children={children} typeColor="text-error-100" />,
    {
      icon: () => <HiXCircle className="w-7 h-7 text-error-100" />,
      containerId: containerId,
      toastId: `error ${children}`,
    }
  );
};
