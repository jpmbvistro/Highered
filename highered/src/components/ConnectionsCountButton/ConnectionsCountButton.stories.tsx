import { wrapProviders } from "../../helpers/wrapProviders";
import ConnectionsCountButton from "./ConnectionsCountButton";

export default {
    component: ConnectionsCountButton,
}

export const Base = (args: any) => wrapProviders(<ConnectionsCountButton {...args}/>)