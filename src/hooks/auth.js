import { useState, useEffect } from "react";
import { loginUser, SignUpUser, getAllUsers, getAllPackages } from "../service/api";

// Hook for logging in user
export const useLogin = (initialState) => {
  const [userData, setUserData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const login = async (requestBody) => {
    try {
      setLoading(true);
      const response = await loginUser(requestBody);
      setUserData(response);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err.response.data.message);
    }
  };

  return [userData, login, loading, error];
};

// Hook for signing up user
export const useSignUp = (initialState) => {
  const [userData, setUserData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const signUp = async (requestBody) => {
    try {
      setLoading(true);
      const response = await SignUpUser(requestBody);
      setUserData(response);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err.response.data.message);
    }
  };

  return [userData, signUp, loading, error];
};

// Hook for getting all users
export const useAllUsers = (initialState) => {
  const [users, setUsers] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getAll = async () => {
    try {
      setLoading(true);
      const response = await getAllUsers();
      setUsers(response);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err.response.data.message);
    }
  };

  useEffect(() => {
    getAll();
  }, []);

  return [users, loading, error];
};

// Hook for getting all packages
export const useAllPackages = (initialState) => {
  const [packages, setPackages] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getAll = async () => {
    try {
      setLoading(true);
      const response = await getAllPackages();
      setPackages(response);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err.response.data.message);
    }
  };

  useEffect(() => {
    getAll();
  }, []);

  return [packages, loading, error];
};
