import { useMemo } from 'react';
import type { Activity } from '../types';
import CalorieDisplay from './CalorieDisplay';

type CalorieTrackerProps = {
  activities: Activity[];
};

function CalorieTracker({ activities }: CalorieTrackerProps) {
  //Counters
  const caloriesConsumed = useMemo(
    () =>
      activities.reduce(
        (total, activity) =>
          activity.category === 1 ? total + activity.calories : total,
        0
      ),
    [activities]
  );

  const caloriesBurned = useMemo(
    () =>
      activities.reduce(
        (total, activity) =>
          activity.category === 2 ? total + activity.calories : total,
        0
      ),
    [activities]
  );

  const netCalories = useMemo(
    () => caloriesConsumed - caloriesBurned,
    [caloriesBurned, caloriesConsumed]
  );

  return (
    <>
      <h2 className="text-4xl font-medium text-white text-center">
        Resumen de Calorías
      </h2>
      <div className="flex flex-col items-center md:flex-row md:justify-between gap-4 mt-10">
        <CalorieDisplay calories={caloriesConsumed} text="Consumidas" />
        <CalorieDisplay calories={caloriesBurned} text="Quemadas (Ejercicio)" />
        <CalorieDisplay calories={netCalories} text="Diferencia" />
      </div>
    </>
  );
}

export default CalorieTracker;
