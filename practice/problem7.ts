/**
 * https://dev.to/macsikora/typescript-exercises-bonus-type-of-pandemia-1fd0
 *
 */

type Sick = { state: "sick" };
type Healthy = { state: "healthy" };
type Quarantine = { state: "quarantaine" };

type Patient = {
  name: string;
} & (Sick | Healthy | Quarantine);

type John = { name: "John" } & Sick;
type Tom = { name: "Tom" } & Healthy;
type Kate = { name: "Kate" } & Sick;
type Mike = { name: "Mike" } & Quarantine;
type Paul = { name: "Paul" } & Healthy;
type Doroty = { name: "Doroty" } & Quarantine;
type Gregory = { name: "Gregory" } & Sick;
type Pierce = { name: "Pierce" } & Quarantine;

// problem 1
// Make type level function which will check if two patients can meet.
type CanMeet<
  A extends Patient,
  B extends Patient
> = "Here your implementation 🔥";

type JohnWithTom = CanMeet<John, Tom>; // false as one is sick and anothe is not
type JohnWithKate = CanMeet<John, Kate>; // true as both are sick
type DorotyWithGregory = CanMeet<Doroty, Gregory>; // false as people in quarantaine cannot meet anybody
type MikeWithTom = CanMeet<Mike, Tom>; // false as people in quarantaine cannot meet anybody
type PaulWithTom = CanMeet<Paul, Tom>; // true yes both are healty

// solution
{
  type CanMeet<A extends Patient, B extends Patient> = A extends Quarantine
    ? false
    : A extends Healthy 
    ? B extends Healthy ? true : false
    : A extends Sick
    ? B extends Sick ? true : false
    : false;
}

// problem 2
// Make type level function which will get all sick patients from the collection of patients
type GetSick<Patients extends Patient[]> = "Here your implementation 🔥";

type Check1 = GetSick<[John, Tom, Kate]>; // Check1 should be [John, Kate]
type Check2 = GetSick<[Gregory, Pierce, Kate, Paul]>; // Check2 should be [Kate, Gregory]
type Check3 = GetSick<[Tom, Paul]>; // Check3 should be []

// solution
{
  type GetSick<Patients extends Patient[]> = {};
}

// improved version with dynamic filter type
{
}

// problem 3
// Create a function which will tell if hospital has enough free beds for patients.
type CanAccomodate<
  Beds extends "🛌"[],
  Patients extends Patient[]
> = "Here your implementation 🔥";

type Result1 = CanAccomodate<["🛌", "🛌"], [John, Tom]>; // true, we have the same amount of beds
type Result2 = CanAccomodate<["🛌", "🛌"], [John]>; // true, we have more beds
type Result3 = CanAccomodate<[], [John]>; // false, we have no beds
type Result4 = CanAccomodate<["🛌", "🛌"], [John, Tom, Doroty]>; // false, we have less beds than patients

// solution
{
  type CanAccomodate<
  Beds extends "🛌"[],
  Patients extends Patient[]
> = {
  
}

}

// problem 4
// Segregate all patients in order to block contact between them in order to slow the spreading of the virus
type Segragate<Patients extends Patient[]> = "Here your implementation 🔥";

// Check the result:
type AfterSegregation = Segragate<[John, Tom, Kate, Mike, Paul, Doroty]>;
/**
 AferSegregation should be
 {
    sick: [Kate, John];
    quarantine: [[Doroty], [Mike]];
    healty: [Paul, Tom];
 }
 */
{
}
