import cogoToast from "cogo-toast";
import { useEffect, useState } from "react";
import { Input } from "../../../../components/Input/Input";
import { Modal } from "../../../../components/Modal/Modal";
import { StyledCreateInvoiceDetailEdit } from "../../../../constats/styles";
import useGetProfile from "../../../../hooks/auth/useGetProfile";
import useUpdateProfile from "../../../../hooks/auth/useUpdateProfile";
import { EditButton } from "./EditButton";

export const Edit = ({ data, onUpdateData }) => {
  const { profile, handleRefetchUser } = useGetProfile();
  const { updateProfile } = useUpdateProfile();
  const [name, setName] = useState("");
  const [taxNumber, setTaxNumber] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSetInitData = () => {
    setName(profile?.name ?? "");
    setTaxNumber(profile?.tax_id ?? "");
    setAddress(profile?.address ?? "");
  };

  useEffect(() => {
    handleSetInitData();
  }, [profile]);

  const handleSave = () => {
    setLoading(true);
    updateProfile({ user: { name, tax_id: taxNumber, address } }).then(
      (resp) => {
        setLoading(false);
        if (resp?.status === 200) {
          handleRefetchUser();
          cogoToast.success("Profile has been updated successfully", {
            hideAfter: 3,
            position: "top-right",
          });
        } else {
          cogoToast.error("Error, profile has not been updated", {
            hideAfter: 3,
            position: "top-right",
          });
        }
      }
    );
  };

  return (
    <Modal
      title="Edit business details"
      button={<EditButton />}
      onSave={handleSave}
      onCloseModal={handleSetInitData}
      loading={loading}
    >
      <StyledCreateInvoiceDetailEdit>
        <Input
          value={name}
          onChange={(value) => setName(value)}
          label="Name"
          className="input"
        />
        <Input
          value={taxNumber}
          onChange={(value) => setTaxNumber(value)}
          label="Tax number (NIE)"
          className="input"
        />
        <Input
          value={address}
          onChange={(value) => setAddress(value)}
          label="Address"
          className="input"
        />
      </StyledCreateInvoiceDetailEdit>
    </Modal>
  );
};
