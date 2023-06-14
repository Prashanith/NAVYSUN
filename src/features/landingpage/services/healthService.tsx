import './services.css'

interface HealthService {
  doctor: string;
  speciality: string;
  availability: Availability[];
  specialnote: string;
  imagePath: string;
}

interface Availability {
  dayOfWeek: DayOfWeek;
  from: string;
  to: string;
}

export enum DayOfWeek {
  SUNDAY = "SUNDAY",
  MONDAY = "MONDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY",
  THURSDAY = "THURSDAY",
  FRIDAY = "FRIDAY",
  SATURDAY = "SATURDAY",
}

function HealthService({
  doctor,
  speciality,
  availability,
  specialnote,
  imagePath,
}: HealthService) {
  return (
    <div className="sm:w-auto card flex flex-col xl:flex-row justify-center items-center xl:pt-0  pt-12 xl:justify-start xl:items-start text-primary rounded-2xl shadow-teal-400  bg-gray-50 ">
      <div>
        <img
          src={imagePath}
          className="xl:h-80 xl:w-60 aspect-square h-52 xl:aspect-auto object-cover rounded-full xl:rounded-2xl object-center"
        />
      </div>
      <div className="py-6 px-8">
        <h1 className=" text-2xl font-bold">{doctor}</h1>
        <h2 className=" text-lg font-semibold">{speciality}</h2>
        <div className='mt-6'>
          <h2 className=" text-sm font-medium">CONSULTATION</h2>
          {availability.map((a) => (
            <div className=" text-sm font-normal pt-3">
              <p>
                <span className="w-28 inline-block">{a.dayOfWeek.toString()}</span> {a.from} - {a.to}
              </p>
            </div>
          ))}
          {/* <div>{specialnote}</div> */}
        </div>
      </div>
    </div>
  );
}

export type { HealthService, Availability };
export default HealthService;
