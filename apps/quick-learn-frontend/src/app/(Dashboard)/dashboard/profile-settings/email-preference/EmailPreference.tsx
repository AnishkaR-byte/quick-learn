'use client';
import {
  getUserPreferencesService,
  updateUserPreferencesService,
} from '@src/apiServices/profileService';
import { FullPageLoader } from '@src/shared/components/UIElements';
import { showApiErrorInToast } from '@src/utils/toastUtils';
import React, { useEffect, useState } from 'react';

const EmailPreference = () => {
  const [isEmailChecked, setIsEmailChecked] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);
    updateUserPreferencesService(e.target.checked)
      .then((res) => setIsEmailChecked(res.data.preference))
      .catch((err) => showApiErrorInToast(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    setIsLoading(true);
    getUserPreferencesService()
      .then((res) => setIsEmailChecked(res.data.preference))
      .catch((err) => showApiErrorInToast(err))
      .finally(() => setIsLoading(false));
  }, [isEmailChecked]);
  return (
    <>
      {isLoading && <FullPageLoader />}
      <div>
        <h1 className="text-lg font-semibold dark:text-white">Preference</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
          Please change your personal preferences.
        </p>

        <div className="flex mt-6">
          <div className="flex items-center h-5">
            <input
              id="helper-checkbox"
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              checked={isEmailChecked}
              onChange={handleChange}
              className="appearance-none h-5 w-5 border border-gray-300 rounded-lg bg-white checked:bg-blue-500 checked:border-blue-500 focus:outline-none transition duration-100"
            />
          </div>
          <div className="ms-2 text-sm">
            <label
              htmlFor="helper-checkbox"
              className="font-medium text-gray-900 dark:text-gray-300"
            >
              Enable All Email Alerts
            </label>
            <p
              id="helper-checkbox-text"
              className="text-sm font-normal text-gray-400 dark:text-gray-300"
            >
              If disabled, no email alert will land in your inbox.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailPreference;
