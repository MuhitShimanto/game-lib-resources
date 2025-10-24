import React, { useContext, useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import AuthContext from "../contexts/AuthContext";
import { FaEdit, FaSave, FaUserCircle } from "react-icons/fa";

const MyProfile = () => {
  const { user, handleUpdateProfile } = useContext(AuthContext);
  // Edit mode
  const [isEditing, setIsEditing] = useState(false);

  // Form Data
  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName || "");
      setPhotoURL(user.photoURL || "");
    }
  }, [user?.displayName, user?.photoURL]);

  // Form Submission
  const handleSave = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await handleUpdateProfile(displayName, photoURL);

      setIsEditing(false);
    } catch (err) {
      console.error("Error updating profile:", err);
      setError("Failed to update profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    if (user) {
      setDisplayName(user.displayName || "");
      setPhotoURL(user.photoURL || "");
    }
    setIsEditing(false);
    setError(null);
  };

  return (
    <>
      <Helmet>
        <title>GameHub | My Profile</title>
      </Helmet>
      <div className="max-w-[1600px] mx-auto px-8 md:px-16 py-16 lg:py-24">
        <div className="max-w-2xl mx-auto rounded-lg p-8 md:p-12">
          <div className="flex flex-col items-center w-full">
            <div className="avatar mb-6">
              <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                {(isEditing ? photoURL : user?.photoURL) ? (
                  <img
                    src={isEditing ? photoURL : user.photoURL}
                    alt="User profile"
                    onError={(e) => {
                      e.target.src =
                        "https://placehold.co/128x128/1C1C1C/FFAA00?text=404";
                    }}
                  />
                ) : (
                  <div className="w-32 h-32 flex items-center justify-center bg-base-300">
                    <FaUserCircle />
                  </div>
                )}
              </div>
            </div>

            {isEditing ? (
              // Edit Mode
              <form onSubmit={handleSave} className="w-full">
                <fieldset className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-neutral">Display Name</label>
                    <input
                      type="text"
                      className="input input-bordered w-full"
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-neutral">Photo URL</label>
                    <input
                      type="url"
                      className="input input-bordered w-full"
                      value={photoURL}
                      onChange={(e) => setPhotoURL(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-neutral">Email</label>
                    <input
                      type="email"
                      className="input input-bordered w-full"
                      value={user?.email || "No email associated"}
                      disabled={true}
                    />
                  </div>

                  {error && (
                    <p className="text-error text-center font-medium">
                      {error}
                    </p>
                  )}

                  <div className="mt-6 flex flex-col md:flex-row gap-4">
                    <button
                      type="submit"
                      className="btn btn-primary flex-1"
                      disabled={loading}
                    >
                      {loading ? (
                        <span className="loading loading-spinner"></span>
                      ) : (
                        <>
                          <FaSave /> Save Changes
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      className="btn btn-ghost flex-1"
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                  </div>
                </fieldset>
              </form>
            ) : (
              // View Mode
              <div className="w-full text-center">
                <h2 className="text-3xl font-bold poppins break-words">
                  {user?.displayName || "No Name Set"}
                </h2>
                <p className="text-neutral text-lg mt-2">
                  {user?.email || "No email associated"}
                </p>

                <div className="mt-8">
                  <button
                    type="button"
                    className="btn btn-outline btn-primary w-full max-w-xs"
                    onClick={() => setIsEditing(true)}
                  >
                    <FaEdit /> Edit Profile
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
