import { Rock } from "./Rock.js";
import { Paper } from "./Paper.js";
import { Scissor } from "./Scissor.js";

export let rock = new Rock();
export let paper = new Paper();
export let scissor = new Scissor();

rock.loosesTo = paper;
rock.winsOver = scissor;

paper.loosesTo = scissor;
paper.winsOver = rock;

scissor.loosesTo = rock;
scissor.winsOver = paper;

