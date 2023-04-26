import { useState, useEffect } from 'react';
import {
  createPackage,
  getAllPackages,
  getPackage,
  updatePackage,
  deletePackage
} from './service/api';

export const usePackage = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createNewPackage = async requestBody => {
    try {
      setLoading(true);
      const newPackage = await createPackage(requestBody);
      setPackages([...packages, newPackage]);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const fetchAllPackages = async () => {
    try {
      setLoading(true);
      const allPackages = await getAllPackages();
      setPackages(allPackages);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const fetchPackageById = async id => {
    try {
      setLoading(true);
      const foundPackage = await getPackage(id);
      setPackages([foundPackage]);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const updateExistingPackage = async (id, requestBody) => {
    try {
      setLoading(true);
      const updatedPackage = await updatePackage(id, requestBody);
      const updatedPackages = packages.map(p =>
        p._id === updatedPackage._id ? updatedPackage : p
      );
      setPackages(updatedPackages);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const deleteExistingPackage = async id => {
    try {
      setLoading(true);
      await deletePackage(id);
      const remainingPackages = packages.filter(p => p._id !== id);
      setPackages(remainingPackages);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllPackages();
  }, []);

  return {
    packages,
    loading,
    error,
    createNewPackage,
    fetchAllPackages,
    fetchPackageById,
    updateExistingPackage,
    deleteExistingPackage
  };
};
