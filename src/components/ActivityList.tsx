import { useMemo, Dispatch } from 'react';
import { Activity } from '../types';
import { categories } from '../data/categories';
import { PencilIcon } from '@heroicons/react/24/solid';
import { ActivityActions } from '../reducers/activity-reducer';

type ActivityListProps = {
  activities: Activity[];
  dispatch: Dispatch<ActivityActions>;
};

export default function ActivityList({
  activities,
  dispatch,
}: ActivityListProps) {
  const categoryName = useMemo(
    () => (category: Activity['category']) =>
      categories.map((cat) => (cat.id === category ? cat.name : '')),
    [activities]
  );
  return (
    <>
      <h2 className="text-4xl font-medium text-slate-700 text-center">
        Comida y Actividades
      </h2>

      {activities.map((activity) => (
        <div
          key={activity.id}
          className="px-4 py-12 mt-4 bg-white flex justify-between rounded-2xl"
        >
          <div className="space-y-2 relative px-4">
            <p
              className={`absolute -top-8 -left-8 px-10 py-2 text-white text-lg font-medium rounded-3xl ${
                activity.category === 1 ? 'bg-lime-500' : 'bg-orange-500'
              }`}
            >
              {categoryName(+activity.category)}
            </p>
            <p className="text-2xl font-medium pt-4">{activity.name}</p>
            <p className="font-black text-4xl text-lime-500">
              {activity.calories} {''} <span>Calorías</span>
            </p>
          </div>
          <div className="flex gap-5 items-center">
            <button
              onClick={() =>
                dispatch({ type: 'set-activeId', payload: { id: activity.id } })
              }
            >
              <PencilIcon className="h-6 w-6 text-blue-700" />
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
