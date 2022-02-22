import { Company } from "./Company";
import { User } from "./User";
import { CustomMap } from "./CustomMap";

const user = new User();
const company = new Company();
new CustomMap("map");

console.log(user, company);