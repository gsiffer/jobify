import { useState } from "react";
import { FormRow, Alert } from "../../components";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/DashboardFormPage";

const Profile = () => {
  const { user, showAlert, displayAlert, updateUser, isLoading } =
    useAppContext();

  const [userData, setUserData] = useState({
    name: user?.name,
    email: user?.email,
    lastName: user?.lastName,
    location: user?.location,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !userData.name ||
      !userData.email ||
      !userData.lastName ||
      !userData.location
    ) {
      // test and remove temporary
      displayAlert();
      return;
    }

    updateUser(userData);
  };
  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>profile </h3>
        {showAlert && <Alert />}

        {/* name */}
        <div className="form-center">
          <FormRow
            type="text"
            name="name"
            value={userData.name}
            handleChange={(e) =>
              setUserData({ ...userData, name: e.target.value })
            }
          />
          <FormRow
            labelText="last name"
            type="text"
            name="lastName"
            value={userData.lastName}
            handleChange={(e) =>
              setUserData({ ...userData, lastName: e.target.value })
            }
          />
          <FormRow
            type="email"
            name="email"
            value={userData.email}
            handleChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />

          <FormRow
            type="text"
            name="location"
            value={userData.location}
            handleChange={(e) =>
              setUserData({ ...userData, location: e.target.value })
            }
          />
          <button className="btn btn-block" type="submit" disabled={isLoading}>
            {isLoading ? "Please Wait..." : "save changes"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile;
