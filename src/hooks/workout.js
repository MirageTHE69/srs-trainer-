import { useState, useEffect } from 'react';
import {
  getAllWorkoutPlans,
  getWorkoutPlan,
  createWorkoutPlan,
  updateWorkoutPlan,
  deleteWorkoutPlan
} from './service/api';

export const useGetAllWorkoutPlans = () => {
  const [workoutPlans, setWorkoutPlans] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWorkoutPlans = async () => {
      try {
        const data = await getAllWorkoutPlans();
        setWorkoutPlans(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchWorkoutPlans();
  }, []);

  return { workoutPlans, isLoading, error };
};

export const useGetWorkoutPlan = id => {
  const [workoutPlan, setWorkoutPlan] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWorkoutPlan = async () => {
      try {
        const data = await getWorkoutPlan(id);
        setWorkoutPlan(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchWorkoutPlan();
  }, [id]);

  return { workoutPlan, isLoading, error };
};

export const useCreateWorkoutPlan = () => {
  const [createdWorkoutPlan, setCreatedWorkoutPlan] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const create = async requestBody => {
    setIsLoading(true);

    try {
      const data = await createWorkoutPlan(requestBody);
      setCreatedWorkoutPlan(data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  return { createdWorkoutPlan, isLoading, error, create };
};

export const useUpdateWorkoutPlan = () => {
  const [updatedWorkoutPlan, setUpdatedWorkoutPlan] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const update = async (id, requestBody) => {
    setIsLoading(true);

    try {
      const data = await updateWorkoutPlan(id, requestBody);
      setUpdatedWorkoutPlan(data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  return { updatedWorkoutPlan, isLoading, error, update };
};

export const useDeleteWorkoutPlan = () => {
  const [deletedWorkoutPlan, setDeletedWorkoutPlan] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const remove = async id => {
    setIsLoading(true);

    try {
      const data = await deleteWorkoutPlan(id);
      setDeletedWorkoutPlan(data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  return { deletedWorkoutPlan, isLoading, error, remove };
};
