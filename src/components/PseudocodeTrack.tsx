import { useState, useEffect, useRef } from 'react';
import Introduction from '../sections/Introduction';
import Variables from '../sections/Variables';
import Constants from '../sections/Constants';
import DataTypes from '../sections/DataTypes';
import ExamFAQ from '../sections/ExamFAQ';
import Practice from '../sections/Practice';
import Quiz from '../sections/Quiz';
import Cheatsheet from '../sections/Cheatsheet';
import D2Overview from '../sections/day2/D2Overview';
import D2Arithmetic from '../sections/day2/D2Arithmetic';
import D2ComparisonLogical from '../sections/day2/D2ComparisonLogical';
import D2StringsConversions from '../sections/day2/D2StringsConversions';
import D2ExamFAQ from '../sections/day2/D2ExamFAQ';
import D2Practice from '../sections/day2/D2Practice';
import D2Quiz from '../sections/day2/D2Quiz';
import D2Cheatsheet from '../sections/day2/D2Cheatsheet';
import D3Overview from '../sections/day3/D3Overview';
import D3IfStatements from '../sections/day3/D3IfStatements';
import D3NestedIf from '../sections/day3/D3NestedIf';
import D3CaseStatement from '../sections/day3/D3CaseStatement';
import D3ExamFAQ from '../sections/day3/D3ExamFAQ';
import D3Practice from '../sections/day3/D3Practice';
import D3Quiz from '../sections/day3/D3Quiz';
import D3Cheatsheet from '../sections/day3/D3Cheatsheet';
import D4Overview from '../sections/day4/D4Overview';
import D4ForLoops from '../sections/day4/D4ForLoops';
import D4WhileLoops from '../sections/day4/D4WhileLoops';
import D4RepeatLoops from '../sections/day4/D4RepeatLoops';
import D4ExamFAQ from '../sections/day4/D4ExamFAQ';
import D4Practice from '../sections/day4/D4Practice';
import D4Quiz from '../sections/day4/D4Quiz';
import D4Cheatsheet from '../sections/day4/D4Cheatsheet';
import D5Overview from '../sections/day5/D5Overview';
import D5StringFunctions from '../sections/day5/D5StringFunctions';
import D5AsciiConversions from '../sections/day5/D5AsciiConversions';
import D5CharProcessing from '../sections/day5/D5CharProcessing';
import D5ExamFAQ from '../sections/day5/D5ExamFAQ';
import D5Practice from '../sections/day5/D5Practice';
import D5Quiz from '../sections/day5/D5Quiz';
import D5Cheatsheet from '../sections/day5/D5Cheatsheet';
import D6Overview from '../sections/day6/D6Overview';
import D6ArrayBasics from '../sections/day6/D6ArrayBasics';
import D6ParallelArrays from '../sections/day6/D6ParallelArrays';
import D6ArrayStatistics from '../sections/day6/D6ArrayStatistics';
import D6ExamFAQ from '../sections/day6/D6ExamFAQ';
import D6Practice from '../sections/day6/D6Practice';
import D6Quiz from '../sections/day6/D6Quiz';
import D6Cheatsheet from '../sections/day6/D6Cheatsheet';
import D7Overview from '../sections/day7/D7Overview';
import D7Declaration from '../sections/day7/D7Declaration';
import D7NestedLoops from '../sections/day7/D7NestedLoops';
import D7Operations from '../sections/day7/D7Operations';
import D7ExamFAQ from '../sections/day7/D7ExamFAQ';
import D7Practice from '../sections/day7/D7Practice';
import D7Quiz from '../sections/day7/D7Quiz';
import D7Cheatsheet from '../sections/day7/D7Cheatsheet';
import D8Overview from '../sections/day8/D8Overview';
import D8FunctionSyntax from '../sections/day8/D8FunctionSyntax';
import D8LinearSearch from '../sections/day8/D8LinearSearch';
import D8CountAndFind from '../sections/day8/D8CountAndFind';
import D8ExamFAQ from '../sections/day8/D8ExamFAQ';
import D8Practice from '../sections/day8/D8Practice';
import D8Quiz from '../sections/day8/D8Quiz';
import D8Cheatsheet from '../sections/day8/D8Cheatsheet';
import D9Overview from '../sections/day9/D9Overview';
import D9ProcedureSyntax from '../sections/day9/D9ProcedureSyntax';
import D9TraceTable from '../sections/day9/D9TraceTable';
import D9Variations from '../sections/day9/D9Variations';
import D9ExamFAQ from '../sections/day9/D9ExamFAQ';
import D9Practice from '../sections/day9/D9Practice';
import D9Quiz from '../sections/day9/D9Quiz';
import D9Cheatsheet from '../sections/day9/D9Cheatsheet';
import D10Overview from '../sections/day10/D10Overview';
import D10Procedures from '../sections/day10/D10Procedures';
import D10Functions from '../sections/day10/D10Functions';
import D10ByValByRef from '../sections/day10/D10ByValByRef';
import D10ExamFAQ from '../sections/day10/D10ExamFAQ';
import D10Practice from '../sections/day10/D10Practice';
import D10Quiz from '../sections/day10/D10Quiz';
import D10Cheatsheet from '../sections/day10/D10Cheatsheet';
import D11Overview from '../sections/day11/D11Overview';
import D11TypeFields from '../sections/day11/D11TypeFields';
import D11ArrayOfRecords from '../sections/day11/D11ArrayOfRecords';
import D11ExamFAQ from '../sections/day11/D11ExamFAQ';
import D11Practice from '../sections/day11/D11Practice';
import D11Quiz from '../sections/day11/D11Quiz';
import D11Cheatsheet from '../sections/day11/D11Cheatsheet';
import D12Overview from '../sections/day12/D12Overview';
import D12ReadWrite from '../sections/day12/D12ReadWrite';
import D12AppendRecords from '../sections/day12/D12AppendRecords';
import D12ExamFAQ from '../sections/day12/D12ExamFAQ';
import D12Practice from '../sections/day12/D12Practice';
import D12Quiz from '../sections/day12/D12Quiz';
import D12Cheatsheet from '../sections/day12/D12Cheatsheet';
import D13Overview from '../sections/day13/D13Overview';
import D13StackImpl from '../sections/day13/D13StackImpl';
import D13Operations from '../sections/day13/D13Operations';
import D13ExamFAQ from '../sections/day13/D13ExamFAQ';
import D13Practice from '../sections/day13/D13Practice';
import D13Quiz from '../sections/day13/D13Quiz';
import D13Cheatsheet from '../sections/day13/D13Cheatsheet';
import D14Overview from '../sections/day14/D14Overview';
import D14QueueImpl from '../sections/day14/D14QueueImpl';
import D14CircularQueue from '../sections/day14/D14CircularQueue';
import D14ExamFAQ from '../sections/day14/D14ExamFAQ';
import D14Practice from '../sections/day14/D14Practice';
import D14Quiz from '../sections/day14/D14Quiz';
import D14Cheatsheet from '../sections/day14/D14Cheatsheet';
import D15Overview from '../sections/day15/D15Overview';
import D15NodeType from '../sections/day15/D15NodeType';
import D15InsertTraverse from '../sections/day15/D15InsertTraverse';
import D15ExamFAQ from '../sections/day15/D15ExamFAQ';
import D15Practice from '../sections/day15/D15Practice';
import D15Quiz from '../sections/day15/D15Quiz';
import D15Cheatsheet from '../sections/day15/D15Cheatsheet';
import D16Overview from '../sections/day16/D16Overview';
import D16TraceTechnique from '../sections/day16/D16TraceTechnique';
import D16TraceExamples from '../sections/day16/D16TraceExamples';
import D16ExamFAQ from '../sections/day16/D16ExamFAQ';
import D16Practice from '../sections/day16/D16Practice';
import D16Quiz from '../sections/day16/D16Quiz';
import D16Cheatsheet from '../sections/day16/D16Cheatsheet';
import D17Overview from '../sections/day17/D17Overview';
import D17IdentifierTables from '../sections/day17/D17IdentifierTables';
import D17StepwiseRefinement from '../sections/day17/D17StepwiseRefinement';
import D17AlgorithmDesign from '../sections/day17/D17AlgorithmDesign';
import D17ExamFAQ from '../sections/day17/D17ExamFAQ';
import D17Practice from '../sections/day17/D17Practice';
import D17Quiz from '../sections/day17/D17Quiz';
import D17Cheatsheet from '../sections/day17/D17Cheatsheet';
import D18Overview from '../sections/day18/D18Overview';
import D18StructureCharts from '../sections/day18/D18StructureCharts';
import D18Flowcharts from '../sections/day18/D18Flowcharts';
import D18Converting from '../sections/day18/D18Converting';
import D18ExamFAQ from '../sections/day18/D18ExamFAQ';
import D18Practice from '../sections/day18/D18Practice';
import D18Quiz from '../sections/day18/D18Quiz';
import D18Cheatsheet from '../sections/day18/D18Cheatsheet';
import D19Overview from '../sections/day19/D19Overview';
import D19ErrorTypes from '../sections/day19/D19ErrorTypes';
import D19TestData from '../sections/day19/D19TestData';
import D19TestingMethods from '../sections/day19/D19TestingMethods';
import D19ExamFAQ from '../sections/day19/D19ExamFAQ';
import D19Practice from '../sections/day19/D19Practice';
import D19Quiz from '../sections/day19/D19Quiz';
import D19Cheatsheet from '../sections/day19/D19Cheatsheet';
import D20Overview from '../sections/day20/D20Overview';
import D20LifeCycleModels from '../sections/day20/D20LifeCycleModels';
import D20Maintenance from '../sections/day20/D20Maintenance';
import D20ExamFAQ from '../sections/day20/D20ExamFAQ';
import D20Practice from '../sections/day20/D20Practice';
import D20Quiz from '../sections/day20/D20Quiz';
import D20Cheatsheet from '../sections/day20/D20Cheatsheet';
import D21Overview from '../sections/day21/D21Overview';
import D21StatesTransitions from '../sections/day21/D21StatesTransitions';
import D21TrafficLight from '../sections/day21/D21TrafficLight';
import D21ExamFAQ from '../sections/day21/D21ExamFAQ';
import D21Practice from '../sections/day21/D21Practice';
import D21Quiz from '../sections/day21/D21Quiz';
import D21Cheatsheet from '../sections/day21/D21Cheatsheet';
import D22Practice from '../sections/day22/D22Practice';
import D23Practice from '../sections/day23/D23Practice';
import D24Practice from '../sections/day24/D24Practice';
import D25Practice from '../sections/day25/D25Practice';
import D26Overview from '../sections/day26/D26Overview';
import D26Algorithm from '../sections/day26/D26Algorithm';
import D26TraceTable from '../sections/day26/D26TraceTable';
import D26ExamFAQ from '../sections/day26/D26ExamFAQ';
import D26Practice from '../sections/day26/D26Practice';
import D26Quiz from '../sections/day26/D26Quiz';
import D26Cheatsheet from '../sections/day26/D26Cheatsheet';
import D27Overview from '../sections/day27/D27Overview';
import D27Algorithm from '../sections/day27/D27Algorithm';
import D27TraceTable from '../sections/day27/D27TraceTable';
import D27Variations from '../sections/day27/D27Variations';
import D27ExamFAQ from '../sections/day27/D27ExamFAQ';
import D27Practice from '../sections/day27/D27Practice';
import D27Quiz from '../sections/day27/D27Quiz';
import D27Cheatsheet from '../sections/day27/D27Cheatsheet';
import D28Overview from '../sections/day28/D28Overview';
import D28Algorithm from '../sections/day28/D28Algorithm';
import D28TraceTable from '../sections/day28/D28TraceTable';
import D28ExamFAQ from '../sections/day28/D28ExamFAQ';
import D28Practice from '../sections/day28/D28Practice';
import D28Quiz from '../sections/day28/D28Quiz';
import D28Cheatsheet from '../sections/day28/D28Cheatsheet';
import D29Overview from '../sections/day29/D29Overview';
import D29Review1to5 from '../sections/day29/D29Review1to5';
import D29Review6to10 from '../sections/day29/D29Review6to10';
import D29Review11to21 from '../sections/day29/D29Review11to21';
import D29Review26to28 from '../sections/day29/D29Review26to28';
import D29MixedQuestions from '../sections/day29/D29MixedQuestions';
import D29Quiz from '../sections/day29/D29Quiz';
import D29Cheatsheet from '../sections/day29/D29Cheatsheet';
import D30Overview from '../sections/day30/D30Overview';
import D30SimPaper from '../sections/day30/D30SimPaper';
import D30Resources from '../sections/day30/D30Resources';
import D30Quiz from '../sections/day30/D30Quiz';
import D30Cheatsheet from '../sections/day30/D30Cheatsheet';

interface DayConfig {
  id: string;
  dayNum: number;
  label: string;
  subtitle: string;
  color: string;
  sections: { id: string; label: string; icon: string; component: React.ComponentType }[];
}

const days: DayConfig[] = [
  {
    id: 'day1', dayNum: 1, label: 'Day 1', subtitle: 'Variables & Data Types', color: 'from-blue-500 to-indigo-500',
    sections: [
      { id: 'd1-intro', label: 'Overview', icon: '🎯', component: Introduction },
      { id: 'd1-variables', label: 'Variables', icon: '📦', component: Variables },
      { id: 'd1-constants', label: 'Constants', icon: '🔒', component: Constants },
      { id: 'd1-datatypes', label: 'Data Types', icon: '🏷️', component: DataTypes },
      { id: 'd1-examfaq', label: 'Exam FAQ', icon: '❓', component: ExamFAQ },
      { id: 'd1-practice', label: 'Practice', icon: '✍️', component: Practice },
      { id: 'd1-quiz', label: 'Quiz', icon: '🧠', component: Quiz },
      { id: 'd1-cheatsheet', label: 'Cheatsheet', icon: '📋', component: Cheatsheet },
    ],
  },
  {
    id: 'day2', dayNum: 2, label: 'Day 2', subtitle: 'Operators & Conversions', color: 'from-violet-500 to-purple-500',
    sections: [
      { id: 'd2-overview', label: 'Overview', icon: '🎯', component: D2Overview },
      { id: 'd2-arithmetic', label: 'Arithmetic', icon: '📐', component: D2Arithmetic },
      { id: 'd2-comparison', label: 'Compare & Logic', icon: '⚖️', component: D2ComparisonLogical },
      { id: 'd2-strings', label: 'Strings & Convert', icon: '🔗', component: D2StringsConversions },
      { id: 'd2-examfaq', label: 'Exam FAQ', icon: '❓', component: D2ExamFAQ },
      { id: 'd2-practice', label: 'Practice', icon: '✍️', component: D2Practice },
      { id: 'd2-quiz', label: 'Quiz', icon: '🧠', component: D2Quiz },
      { id: 'd2-cheatsheet', label: 'Cheatsheet', icon: '📋', component: D2Cheatsheet },
    ],
  },
  {
    id: 'day3', dayNum: 3, label: 'Day 3', subtitle: 'Selection (IF & CASE)', color: 'from-fuchsia-500 to-pink-500',
    sections: [
      { id: 'd3-overview', label: 'Overview', icon: '🎯', component: D3Overview },
      { id: 'd3-if', label: 'IF Statements', icon: '🔀', component: D3IfStatements },
      { id: 'd3-nested', label: 'Nested IF', icon: '🪆', component: D3NestedIf },
      { id: 'd3-case', label: 'CASE Statement', icon: '📋', component: D3CaseStatement },
      { id: 'd3-examfaq', label: 'Exam FAQ', icon: '❓', component: D3ExamFAQ },
      { id: 'd3-practice', label: 'Practice', icon: '✍️', component: D3Practice },
      { id: 'd3-quiz', label: 'Quiz', icon: '🧠', component: D3Quiz },
      { id: 'd3-cheatsheet', label: 'Cheatsheet', icon: '📋', component: D3Cheatsheet },
    ],
  },
  {
    id: 'day4', dayNum: 4, label: 'Day 4', subtitle: 'Loops (FOR, WHILE, REPEAT)', color: 'from-amber-500 to-orange-500',
    sections: [
      { id: 'd4-overview', label: 'Overview', icon: '🎯', component: D4Overview },
      { id: 'd4-for', label: 'FOR Loops', icon: '🔢', component: D4ForLoops },
      { id: 'd4-while', label: 'WHILE Loops', icon: '🔄', component: D4WhileLoops },
      { id: 'd4-repeat', label: 'REPEAT Loops', icon: '🔁', component: D4RepeatLoops },
      { id: 'd4-examfaq', label: 'Exam FAQ', icon: '❓', component: D4ExamFAQ },
      { id: 'd4-practice', label: 'Practice', icon: '✍️', component: D4Practice },
      { id: 'd4-quiz', label: 'Quiz', icon: '🧠', component: D4Quiz },
      { id: 'd4-cheatsheet', label: 'Cheatsheet', icon: '📋', component: D4Cheatsheet },
    ],
  },
  {
    id: 'day5', dayNum: 5, label: 'Day 5', subtitle: 'String Manipulation', color: 'from-teal-500 to-cyan-500',
    sections: [
      { id: 'd5-overview', label: 'Overview', icon: '🎯', component: D5Overview },
      { id: 'd5-functions', label: 'String Functions', icon: '🔧', component: D5StringFunctions },
      { id: 'd5-ascii', label: 'ASCII & Conversions', icon: '🔢', component: D5AsciiConversions },
      { id: 'd5-charprocess', label: 'Char Processing', icon: '🔄', component: D5CharProcessing },
      { id: 'd5-examfaq', label: 'Exam FAQ', icon: '❓', component: D5ExamFAQ },
      { id: 'd5-practice', label: 'Practice', icon: '✍️', component: D5Practice },
      { id: 'd5-quiz', label: 'Quiz', icon: '🧠', component: D5Quiz },
      { id: 'd5-cheatsheet', label: 'Cheatsheet', icon: '📋', component: D5Cheatsheet },
    ],
  },
  {
    id: 'day6', dayNum: 6, label: 'Day 6', subtitle: '1D Arrays', color: 'from-rose-500 to-pink-500',
    sections: [
      { id: 'd6-overview', label: 'Overview', icon: '🎯', component: D6Overview },
      { id: 'd6-basics', label: 'Array Basics', icon: '📦', component: D6ArrayBasics },
      { id: 'd6-parallel', label: 'Parallel Arrays', icon: '🔗', component: D6ParallelArrays },
      { id: 'd6-stats', label: 'Statistics', icon: '📊', component: D6ArrayStatistics },
      { id: 'd6-examfaq', label: 'Exam FAQ', icon: '❓', component: D6ExamFAQ },
      { id: 'd6-practice', label: 'Practice', icon: '✍️', component: D6Practice },
      { id: 'd6-quiz', label: 'Quiz', icon: '🧠', component: D6Quiz },
      { id: 'd6-cheatsheet', label: 'Cheatsheet', icon: '📋', component: D6Cheatsheet },
    ],
  },
  {
    id: 'day7', dayNum: 7, label: 'Day 7', subtitle: '2D Arrays', color: 'from-orange-500 to-red-500',
    sections: [
      { id: 'd7-overview', label: 'Overview', icon: '🎯', component: D7Overview },
      { id: 'd7-declaration', label: 'Declaration & Access', icon: '📦', component: D7Declaration },
      { id: 'd7-nestedloops', label: 'Nested Loops', icon: '🔁', component: D7NestedLoops },
      { id: 'd7-operations', label: 'Operations', icon: '⚙️', component: D7Operations },
      { id: 'd7-examfaq', label: 'Exam FAQ', icon: '❓', component: D7ExamFAQ },
      { id: 'd7-practice', label: 'Practice', icon: '✍️', component: D7Practice },
      { id: 'd7-quiz', label: 'Quiz', icon: '🧠', component: D7Quiz },
      { id: 'd7-cheatsheet', label: 'Cheatsheet', icon: '📋', component: D7Cheatsheet },
    ],
  },
  {
    id: 'day8', dayNum: 8, label: 'Day 8', subtitle: 'Linear Search', color: 'from-sky-500 to-blue-500',
    sections: [
      { id: 'd8-overview', label: 'Overview', icon: '🎯', component: D8Overview },
      { id: 'd8-function', label: 'FUNCTION Syntax', icon: '🔧', component: D8FunctionSyntax },
      { id: 'd8-search', label: 'Linear Search', icon: '🔍', component: D8LinearSearch },
      { id: 'd8-count', label: 'Count & Find All', icon: '🔢', component: D8CountAndFind },
      { id: 'd8-examfaq', label: 'Exam FAQ', icon: '❓', component: D8ExamFAQ },
      { id: 'd8-practice', label: 'Practice', icon: '✍️', component: D8Practice },
      { id: 'd8-quiz', label: 'Quiz', icon: '🧠', component: D8Quiz },
      { id: 'd8-cheatsheet', label: 'Cheatsheet', icon: '📋', component: D8Cheatsheet },
    ],
  },
  {
    id: 'day9', dayNum: 9, label: 'Day 9', subtitle: 'Bubble Sort', color: 'from-pink-500 to-rose-500',
    sections: [
      { id: 'd9-overview', label: 'Overview', icon: '🫧', component: D9Overview },
      { id: 'd9-procedure', label: 'PROCEDURE & BYREF', icon: '🔧', component: D9ProcedureSyntax },
      { id: 'd9-trace', label: 'Trace Tables', icon: '📋', component: D9TraceTable },
      { id: 'd9-variations', label: 'Variations', icon: '🔽', component: D9Variations },
      { id: 'd9-examfaq', label: 'Exam FAQ', icon: '❓', component: D9ExamFAQ },
      { id: 'd9-practice', label: 'Practice', icon: '✍️', component: D9Practice },
      { id: 'd9-quiz', label: 'Quiz', icon: '🧠', component: D9Quiz },
      { id: 'd9-cheatsheet', label: 'Cheatsheet', icon: '📋', component: D9Cheatsheet },
    ],
  },
  {
    id: 'day10', dayNum: 10, label: 'Day 10', subtitle: 'Procedures & Functions', color: 'from-lime-500 to-green-500',
    sections: [
      { id: 'd10-overview', label: 'Overview', icon: '🎯', component: D10Overview },
      { id: 'd10-procedures', label: 'Procedures', icon: '🔧', component: D10Procedures },
      { id: 'd10-functions', label: 'Functions', icon: '📤', component: D10Functions },
      { id: 'd10-byvalbyref', label: 'BYVAL vs BYREF', icon: '📨', component: D10ByValByRef },
      { id: 'd10-examfaq', label: 'Exam FAQ', icon: '❓', component: D10ExamFAQ },
      { id: 'd10-practice', label: 'Practice', icon: '✍️', component: D10Practice },
      { id: 'd10-quiz', label: 'Quiz', icon: '🧠', component: D10Quiz },
      { id: 'd10-cheatsheet', label: 'Cheatsheet', icon: '📋', component: D10Cheatsheet },
    ],
  },
  {
    id: 'day11', dayNum: 11, label: 'Day 11', subtitle: 'Records (TYPE)', color: 'from-red-500 to-rose-600',
    sections: [
      { id: 'd11-overview', label: 'Overview', icon: '🎯', component: D11Overview },
      { id: 'd11-typefields', label: 'TYPE & Fields', icon: '📋', component: D11TypeFields },
      { id: 'd11-arrayofrecords', label: 'Array of Records', icon: '📦', component: D11ArrayOfRecords },
      { id: 'd11-examfaq', label: 'Exam FAQ', icon: '❓', component: D11ExamFAQ },
      { id: 'd11-practice', label: 'Practice', icon: '✍️', component: D11Practice },
      { id: 'd11-quiz', label: 'Quiz', icon: '🧠', component: D11Quiz },
      { id: 'd11-cheatsheet', label: 'Cheatsheet', icon: '📋', component: D11Cheatsheet },
    ],
  },
  {
    id: 'day12', dayNum: 12, label: 'Day 12', subtitle: 'File Handling', color: 'from-orange-500 to-amber-500',
    sections: [
      { id: 'd12-overview', label: 'Overview', icon: '🎯', component: D12Overview },
      { id: 'd12-readwrite', label: 'Read & Write', icon: '📖', component: D12ReadWrite },
      { id: 'd12-appendrecords', label: 'Append & Records', icon: '📝', component: D12AppendRecords },
      { id: 'd12-examfaq', label: 'Exam FAQ', icon: '❓', component: D12ExamFAQ },
      { id: 'd12-practice', label: 'Practice', icon: '✍️', component: D12Practice },
      { id: 'd12-quiz', label: 'Quiz', icon: '🧠', component: D12Quiz },
      { id: 'd12-cheatsheet', label: 'Cheatsheet', icon: '📋', component: D12Cheatsheet },
    ],
  },
  {
    id: 'day13', dayNum: 13, label: 'Day 13', subtitle: 'Stacks (ADT)', color: 'from-violet-500 to-indigo-500',
    sections: [
      { id: 'd13-overview', label: 'Overview', icon: '🎯', component: D13Overview },
      { id: 'd13-stackimpl', label: 'Stack Implementation', icon: '🔧', component: D13StackImpl },
      { id: 'd13-operations', label: 'Trace & Applications', icon: '📋', component: D13Operations },
      { id: 'd13-examfaq', label: 'Exam FAQ', icon: '❓', component: D13ExamFAQ },
      { id: 'd13-practice', label: 'Practice', icon: '✍️', component: D13Practice },
      { id: 'd13-quiz', label: 'Quiz', icon: '🧠', component: D13Quiz },
      { id: 'd13-cheatsheet', label: 'Cheatsheet', icon: '📋', component: D13Cheatsheet },
    ],
  },
  {
    id: 'day14', dayNum: 14, label: 'Day 14', subtitle: 'Queues (ADT)', color: 'from-emerald-500 to-teal-500',
    sections: [
      { id: 'd14-overview', label: 'Overview', icon: '🎯', component: D14Overview },
      { id: 'd14-queueimpl', label: 'Queue Implementation', icon: '🔧', component: D14QueueImpl },
      { id: 'd14-circular', label: 'Circular Queue', icon: '🔄', component: D14CircularQueue },
      { id: 'd14-examfaq', label: 'Exam FAQ', icon: '❓', component: D14ExamFAQ },
      { id: 'd14-practice', label: 'Practice', icon: '✍️', component: D14Practice },
      { id: 'd14-quiz', label: 'Quiz', icon: '🧠', component: D14Quiz },
      { id: 'd14-cheatsheet', label: 'Cheatsheet', icon: '📋', component: D14Cheatsheet },
    ],
  },
  {
    id: 'day15', dayNum: 15, label: 'Day 15', subtitle: 'Linked Lists', color: 'from-cyan-500 to-teal-500',
    sections: [
      { id: 'd15-overview', label: 'Overview', icon: '🔗', component: D15Overview },
      { id: 'd15-nodetype', label: 'Node TYPE & Init', icon: '📦', component: D15NodeType },
      { id: 'd15-inserttraverse', label: 'Insert & Traverse', icon: '➕', component: D15InsertTraverse },
      { id: 'd15-examfaq', label: 'Exam FAQ', icon: '❓', component: D15ExamFAQ },
      { id: 'd15-practice', label: 'Practice', icon: '✍️', component: D15Practice },
      { id: 'd15-quiz', label: 'Quiz', icon: '🧠', component: D15Quiz },
      { id: 'd15-cheatsheet', label: 'Cheatsheet', icon: '📋', component: D15Cheatsheet },
    ],
  },
  {
    id: 'day16', dayNum: 16, label: 'Day 16', subtitle: 'Trace Tables', color: 'from-purple-500 to-violet-500',
    sections: [
      { id: 'd16-overview', label: 'Overview', icon: '🎯', component: D16Overview },
      { id: 'd16-technique', label: 'Trace Technique', icon: '📐', component: D16TraceTechnique },
      { id: 'd16-examples', label: 'More Examples', icon: '📊', component: D16TraceExamples },
      { id: 'd16-examfaq', label: 'Exam FAQ', icon: '❓', component: D16ExamFAQ },
      { id: 'd16-practice', label: 'Practice', icon: '✍️', component: D16Practice },
      { id: 'd16-quiz', label: 'Quiz', icon: '🧠', component: D16Quiz },
      { id: 'd16-cheatsheet', label: 'Cheatsheet', icon: '📋', component: D16Cheatsheet },
    ],
  },
  {
    id: 'day17', dayNum: 17, label: 'Day 17', subtitle: 'Identifier Tables & Algorithm Design', color: 'from-sky-500 to-blue-500',
    sections: [
      { id: 'd17-overview', label: 'Overview', icon: '🎯', component: D17Overview },
      { id: 'd17-identifiers', label: 'Identifier Tables', icon: '📋', component: D17IdentifierTables },
      { id: 'd17-refinement', label: 'Stepwise Refinement', icon: '🪜', component: D17StepwiseRefinement },
      { id: 'd17-algorithm', label: 'Algorithm Design', icon: '🏗️', component: D17AlgorithmDesign },
      { id: 'd17-examfaq', label: 'Exam FAQ', icon: '❓', component: D17ExamFAQ },
      { id: 'd17-practice', label: 'Practice', icon: '✍️', component: D17Practice },
      { id: 'd17-quiz', label: 'Quiz', icon: '🧠', component: D17Quiz },
      { id: 'd17-cheatsheet', label: 'Cheatsheet', icon: '📋', component: D17Cheatsheet },
    ],
  },
  {
    id: 'day18', dayNum: 18, label: 'Day 18', subtitle: 'Structure Charts + Flowcharts', color: 'from-pink-500 to-rose-500',
    sections: [
      { id: 'd18-overview', label: 'Overview', icon: '🎯', component: D18Overview },
      { id: 'd18-structurecharts', label: 'Structure Charts', icon: '🏗️', component: D18StructureCharts },
      { id: 'd18-flowcharts', label: 'Flowchart Symbols', icon: '🔷', component: D18Flowcharts },
      { id: 'd18-converting', label: 'Converting', icon: '🔄', component: D18Converting },
      { id: 'd18-examfaq', label: 'Exam FAQ', icon: '❓', component: D18ExamFAQ },
      { id: 'd18-practice', label: 'Practice', icon: '✍️', component: D18Practice },
      { id: 'd18-quiz', label: 'Quiz', icon: '🧠', component: D18Quiz },
      { id: 'd18-cheatsheet', label: 'Cheatsheet', icon: '📋', component: D18Cheatsheet },
    ],
  },
  {
    id: 'day19', dayNum: 19, label: 'Day 19', subtitle: 'Testing & Test Data', color: 'from-red-500 to-rose-500',
    sections: [
      { id: 'd19-overview', label: 'Overview', icon: '🎯', component: D19Overview },
      { id: 'd19-errortypes', label: 'Error Types', icon: '🐛', component: D19ErrorTypes },
      { id: 'd19-testdata', label: 'Test Data', icon: '📊', component: D19TestData },
      { id: 'd19-methods', label: 'Testing Methods', icon: '🔬', component: D19TestingMethods },
      { id: 'd19-examfaq', label: 'Exam FAQ', icon: '❓', component: D19ExamFAQ },
      { id: 'd19-practice', label: 'Practice', icon: '✍️', component: D19Practice },
      { id: 'd19-quiz', label: 'Quiz', icon: '🧠', component: D19Quiz },
      { id: 'd19-cheatsheet', label: 'Cheatsheet', icon: '📋', component: D19Cheatsheet },
    ],
  },
  {
    id: 'day20', dayNum: 20, label: 'Day 20', subtitle: 'Program Development Life Cycle', color: 'from-emerald-500 to-teal-500',
    sections: [
      { id: 'd20-overview', label: 'Overview', icon: '🎯', component: D20Overview },
      { id: 'd20-lifecycle', label: 'Life Cycle Models', icon: '💧', component: D20LifeCycleModels },
      { id: 'd20-maintenance', label: 'Maintenance Types', icon: '🔧', component: D20Maintenance },
      { id: 'd20-examfaq', label: 'Exam FAQ', icon: '❓', component: D20ExamFAQ },
      { id: 'd20-practice', label: 'Practice', icon: '✍️', component: D20Practice },
      { id: 'd20-quiz', label: 'Quiz', icon: '🧠', component: D20Quiz },
      { id: 'd20-cheatsheet', label: 'Cheatsheet', icon: '📋', component: D20Cheatsheet },
    ],
  },
  {
    id: 'day21', dayNum: 21, label: 'Day 21', subtitle: 'State-Transition Diagrams', color: 'from-sky-500 to-blue-500',
    sections: [
      { id: 'd21-overview', label: 'Overview', icon: '🎯', component: D21Overview },
      { id: 'd21-states', label: 'States & Transitions', icon: '⭕', component: D21StatesTransitions },
      { id: 'd21-traffic', label: 'Traffic Light', icon: '🚦', component: D21TrafficLight },
      { id: 'd21-examfaq', label: 'Exam FAQ', icon: '❓', component: D21ExamFAQ },
      { id: 'd21-practice', label: 'Practice', icon: '✍️', component: D21Practice },
      { id: 'd21-quiz', label: 'Quiz', icon: '🧠', component: D21Quiz },
      { id: 'd21-cheatsheet', label: 'Cheatsheet', icon: '📋', component: D21Cheatsheet },
    ],
  },
  {
    id: 'day22', dayNum: 22, label: 'Day 22', subtitle: 'Past Paper Practice (Days 1–7)', color: 'from-slate-500 to-gray-600',
    sections: [
      { id: 'd22-practice', label: 'Past Paper Practice', icon: '📝', component: D22Practice },
    ],
  },
  {
    id: 'day23', dayNum: 23, label: 'Day 23', subtitle: 'Past Paper Practice (Days 8–14)', color: 'from-slate-500 to-gray-600',
    sections: [
      { id: 'd23-practice', label: 'Past Paper Practice', icon: '📝', component: D23Practice },
    ],
  },
  {
    id: 'day24', dayNum: 24, label: 'Day 24', subtitle: 'Past Paper Practice (Days 15–18)', color: 'from-slate-500 to-gray-600',
    sections: [
      { id: 'd24-practice', label: 'Past Paper Practice', icon: '📝', component: D24Practice },
    ],
  },
  {
    id: 'day25', dayNum: 25, label: 'Day 25', subtitle: 'Full Mixed Past Paper Practice', color: 'from-slate-500 to-gray-600',
    sections: [
      { id: 'd25-practice', label: 'Past Paper Practice', icon: '📝', component: D25Practice },
    ],
  },
  {
    id: 'day26', dayNum: 26, label: 'Day 26', subtitle: 'Binary Search', color: 'from-violet-500 to-purple-600',
    sections: [
      { id: 'd26-overview', label: 'Overview', icon: '🎯', component: D26Overview },
      { id: 'd26-algorithm', label: 'The Algorithm', icon: '🔍', component: D26Algorithm },
      { id: 'd26-trace', label: 'Trace Tables', icon: '📋', component: D26TraceTable },
      { id: 'd26-examfaq', label: 'Exam FAQ', icon: '❓', component: D26ExamFAQ },
      { id: 'd26-practice', label: 'Practice', icon: '✍️', component: D26Practice },
      { id: 'd26-quiz', label: 'Quiz', icon: '🧠', component: D26Quiz },
      { id: 'd26-cheatsheet', label: 'Cheatsheet', icon: '📋', component: D26Cheatsheet },
    ],
  },
  {
    id: 'day27', dayNum: 27, label: 'Day 27', subtitle: 'Insertion Sort', color: 'from-fuchsia-500 to-purple-600',
    sections: [
      { id: 'd27-overview', label: 'Overview', icon: '🎯', component: D27Overview },
      { id: 'd27-algorithm', label: 'The Algorithm', icon: '🔧', component: D27Algorithm },
      { id: 'd27-trace', label: 'Trace Tables', icon: '📋', component: D27TraceTable },
      { id: 'd27-variations', label: 'Variations', icon: '🔄', component: D27Variations },
      { id: 'd27-examfaq', label: 'Exam FAQ', icon: '❓', component: D27ExamFAQ },
      { id: 'd27-practice', label: 'Practice', icon: '✍️', component: D27Practice },
      { id: 'd27-quiz', label: 'Quiz', icon: '🧠', component: D27Quiz },
      { id: 'd27-cheatsheet', label: 'Cheatsheet', icon: '📋', component: D27Cheatsheet },
    ],
  },
  {
    id: 'day28', dayNum: 28, label: 'Day 28', subtitle: 'Recursion', color: 'from-violet-500 to-indigo-600',
    sections: [
      { id: 'd28-overview', label: 'Overview', icon: '🎯', component: D28Overview },
      { id: 'd28-algorithm', label: 'The Algorithm', icon: '🔧', component: D28Algorithm },
      { id: 'd28-trace', label: 'Trace Tables', icon: '📋', component: D28TraceTable },
      { id: 'd28-examfaq', label: 'Exam FAQ', icon: '❓', component: D28ExamFAQ },
      { id: 'd28-practice', label: 'Practice', icon: '✍️', component: D28Practice },
      { id: 'd28-quiz', label: 'Quiz', icon: '🧠', component: D28Quiz },
      { id: 'd28-cheatsheet', label: 'Cheatsheet', icon: '📋', component: D28Cheatsheet },
    ],
  },
  {
    id: 'day29', dayNum: 29, label: 'Day 29', subtitle: 'Final Review', color: 'from-yellow-500 to-orange-500',
    sections: [
      { id: 'd29-overview', label: 'Overview', icon: '🎯', component: D29Overview },
      { id: 'd29-review1to5', label: 'Days 1–5 Review', icon: '📝', component: D29Review1to5 },
      { id: 'd29-review6to10', label: 'Days 6–10 Review', icon: '📊', component: D29Review6to10 },
      { id: 'd29-review11to21', label: 'Days 11–21 Review', icon: '🏗️', component: D29Review11to21 },
      { id: 'd29-review26to28', label: 'Days 26–28 Review', icon: '🔬', component: D29Review26to28 },
      { id: 'd29-mixed', label: 'Mixed Challenges', icon: '🎯', component: D29MixedQuestions },
      { id: 'd29-quiz', label: 'Final Quiz', icon: '🧠', component: D29Quiz },
      { id: 'd29-cheatsheet', label: 'Master Cheatsheet', icon: '📋', component: D29Cheatsheet },
    ],
  },
  {
    id: 'day30', dayNum: 30, label: 'Day 30', subtitle: 'Final Exam + Resources', color: 'from-yellow-500 to-red-500',
    sections: [
      { id: 'd30-overview', label: 'Overview', icon: '🏆', component: D30Overview },
      { id: 'd30-simpaper', label: 'Simulation Paper', icon: '📝', component: D30SimPaper },
      { id: 'd30-resources', label: 'Past Papers', icon: '📄', component: D30Resources },
      { id: 'd30-quiz', label: 'Final Quiz', icon: '🧠', component: D30Quiz },
      { id: 'd30-cheatsheet', label: 'Master Cheatsheet', icon: '📋', component: D30Cheatsheet },
    ],
  },
];

const allSections = days.flatMap(d => d.sections);

const studyTips: Record<number, string> = {
  0: "Read each section, then try the practice without looking!",
  1: "DIV and MOD are exam favourites — practice digit extraction until it's automatic!",
  2: "No ELSE IF in pseudocode! Nested IF is the #1 exam trap — master it today.",
  3: "FOR vs WHILE vs REPEAT — know WHEN to use each and WHY. The exam WILL ask you to justify!",
  4: "String manipulation is HUGE at A Level — master the FOR + MID pattern and Caesar cipher will be easy!",
  5: "Arrays are usually 1-indexed in Cambridge pseudocode. Keep your loop bounds and array bounds consistent.",
  6: "2D Arrays: Row ALWAYS comes first! And remember — reset Total INSIDE the outer loop, not before it.",
  7: "Linear Search: RETURN -1 for not found. For counting, NEVER use early RETURN — use a counter instead!",
  8: "Bubble Sort: BYREF for the array, 3-step swap with Temp, inner loop to Size-i, and Swapped flag for early exit. These 4 things = full marks!",
  9: "Procedures use CALL, functions don't. BYVAL = copy (original safe), BYREF = reference (original changes). Always write BYVAL/BYREF explicitly in exams!",
  10: "Records: TYPE must come before ENDTYPE. Access fields with dot notation: Record.Field. Arrays of records combine both topics — a favourite exam question!",
  11: "File Handling: Always OPENFILE before reading/writing and CLOSEFILE after. WRITE overwrites everything — use APPEND to add to a file!",
  12: "Identifier Tables: Include EVERY identifier — even loop counters like i and j. Average is always REAL. Level 2 refinement is English, not pseudocode!",
  13: "Stacks: LIFO! Push is a PROCEDURE (use CALL), Pop is a FUNCTION (no CALL). TopPointer=0 means empty, TopPointer=MAXSIZE means full. Always check before Push/Pop!",
  14: "Queues: FIFO! The MOD formula Rear ← (Rear MOD MAXSIZE) + 1 is the key to circular queues. Use Size to check empty/full — never rely on Front and Rear alone!",
};

interface Props {
  onGoHome: () => void;
  completedSections: Set<string>;
  onUpdateCompleted: (sections: Set<string>) => void;
}

export default function PseudocodeTrack({ onGoHome, completedSections, onUpdateCompleted }: Props) {
  const [activeDay, setActiveDay] = useState(0);
  const [activeSection, setActiveSection] = useState(days[0].sections[0].id);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dayPickerOpen, setDayPickerOpen] = useState(false);
  const dayPickerRef = useRef<HTMLDivElement>(null);

  const currentDay = days[activeDay];
  const currentSectionIndex = currentDay.sections.findIndex(s => s.id === activeSection);
  const validIndex = currentSectionIndex >= 0 ? currentSectionIndex : 0;
  const CurrentComponent = currentDay.sections[validIndex].component;

  const globalIndex = allSections.findIndex(s => s.id === activeSection);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dayPickerRef.current && !dayPickerRef.current.contains(e.target as Node)) {
        setDayPickerOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const navigateTo = (id: string) => {
    setActiveSection(id);
    setSidebarOpen(false);
    const newSet = new Set(completedSections);
    newSet.add(activeSection);
    onUpdateCompleted(newSet);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const switchDay = (dayIndex: number) => {
    setActiveDay(dayIndex);
    setActiveSection(days[dayIndex].sections[0].id);
    setDayPickerOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goNext = () => {
    if (globalIndex < allSections.length - 1) {
      const nextSection = allSections[globalIndex + 1];
      const nextDayIndex = days.findIndex(d => d.sections.some(s => s.id === nextSection.id));
      if (nextDayIndex !== activeDay) setActiveDay(nextDayIndex);
      navigateTo(nextSection.id);
    }
  };

  const goPrev = () => {
    if (globalIndex > 0) {
      const prevSection = allSections[globalIndex - 1];
      const prevDayIndex = days.findIndex(d => d.sections.some(s => s.id === prevSection.id));
      if (prevDayIndex !== activeDay) setActiveDay(prevDayIndex);
      navigateTo(prevSection.id);
    }
  };

  const getDayProgress = (dayIndex: number) => {
    const daySections = days[dayIndex].sections;
    const completed = daySections.filter(s => completedSections.has(s.id)).length;
    return Math.round((completed / daySections.length) * 100);
  };

  const totalSections = allSections.length;
  const progress = Math.round((completedSections.size / totalSections) * 100);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="min-h-screen flex">
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-white shadow-lg rounded-xl p-3 hover:bg-gray-50 transition-all"
      >
        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {sidebarOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/30 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      <aside className={`fixed lg:sticky top-0 left-0 h-screen w-72 bg-white border-r border-gray-200 z-40 transition-transform duration-300 flex flex-col ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        {/* Header */}
        <div className="p-5 border-b border-gray-100">
          <button onClick={onGoHome} className="text-sm text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-1 mb-3 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back to Home
          </button>
          <h1 className="text-xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent flex items-center gap-2">
            <span className="text-2xl">📝</span> Pseudocode
          </h1>
          <div className="mt-3">
            <div className="flex justify-between text-xs text-gray-500 mb-1">
              <span>Overall Progress</span>
              <span>{progress}%</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>

        {/* Day Picker Dropdown */}
        <div className="px-4 pt-4 pb-2 relative" ref={dayPickerRef}>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 px-1">Current Day</p>
          <button
            onClick={() => setDayPickerOpen(!dayPickerOpen)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl border-2 transition-all ${
              dayPickerOpen
                ? 'border-indigo-400 bg-indigo-50 shadow-md'
                : 'border-gray-200 bg-white hover:border-indigo-300 hover:bg-gray-50'
            }`}
          >
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${currentDay.color} flex items-center justify-center text-white font-extrabold text-sm shadow-sm`}>
              {currentDay.dayNum}
            </div>
            <div className="flex-1 text-left">
              <p className="font-bold text-gray-800 text-sm">{currentDay.label}</p>
              <p className="text-[11px] text-gray-500 leading-tight">{currentDay.subtitle}</p>
            </div>
            <svg className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${dayPickerOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {dayPickerOpen && (
            <div className="absolute top-full left-4 right-4 mt-1 bg-white border border-gray-200 rounded-2xl shadow-2xl z-50 overflow-hidden animate-fade-in-up">
              <div className="p-3 border-b border-gray-100 bg-gray-50">
                <p className="text-xs font-bold text-gray-500">Select a Day</p>
              </div>
              <div className="p-3 max-h-72 overflow-y-auto">
                <div className="space-y-1">
                  {days.map((day, idx) => {
                    const dayProgress = getDayProgress(idx);
                    const isActive = activeDay === idx;
                    return (
                      <button
                        key={day.id}
                        onClick={() => switchDay(idx)}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${
                          isActive
                            ? 'bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200'
                            : 'hover:bg-gray-50'
                        }`}
                      >
                        <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${day.color} flex items-center justify-center text-white font-bold text-xs shadow-sm flex-shrink-0`}>
                          {day.dayNum}
                        </div>
                        <div className="flex-1 text-left min-w-0">
                          <p className={`text-sm font-semibold truncate ${isActive ? 'text-indigo-700' : 'text-gray-700'}`}>
                            {day.subtitle}
                          </p>
                          <div className="flex items-center gap-2 mt-0.5">
                            <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                              <div
                                className={`h-full rounded-full bg-gradient-to-r ${day.color}`}
                                style={{ width: `${dayProgress}%` }}
                              />
                            </div>
                            <span className="text-[10px] font-bold text-gray-400 w-8 text-right">{dayProgress}%</span>
                          </div>
                        </div>
                        {isActive && (
                          <div className="w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {days.length < 30 && (
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <div className="flex flex-wrap gap-1.5">
                      {Array.from({ length: 30 - days.length }, (_, i) => (
                        <div
                          key={i}
                          className="w-9 h-9 rounded-lg bg-gray-50 border border-dashed border-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-300"
                        >
                          {days.length + i + 1}
                        </div>
                      ))}
                    </div>
                    <p className="text-[10px] text-gray-400 mt-2 text-center">More days coming soon...</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Section Navigation */}
        <nav className="flex-1 px-4 pb-4 pt-2 overflow-y-auto">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 px-3">
            {currentDay.label} Topics
          </p>
          <div className="space-y-1">
            {currentDay.sections.map((section) => {
              const isActive = activeSection === section.id;
              const isCompleted = completedSections.has(section.id);
              return (
                <button
                  key={section.id}
                  onClick={() => navigateTo(section.id)}
                  className={`nav-item w-full text-left px-4 py-3 rounded-xl font-medium text-sm flex items-center gap-3 ${
                    isActive ? 'active' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-sm ${
                    isActive ? 'bg-white/20' : isCompleted ? 'bg-green-100' : 'bg-gray-100'
                  }`}>
                    {isCompleted && !isActive ? '✓' : section.icon}
                  </span>
                  <span>{section.label}</span>
                </button>
              );
            })}
          </div>
        </nav>

        {/* Study Tip */}
        <div className="p-4 border-t border-gray-100">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-xl">
            <p className="text-xs font-bold text-indigo-700">💡 Study Tip</p>
            <p className="text-xs text-indigo-600 mt-1">
              {studyTips[activeDay] || "Practice makes perfect! Try every exercise before checking the solution."}
            </p>
          </div>
        </div>
      </aside>

      <main className="flex-1 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-8 pl-12 lg:pl-0">
            <span className="cursor-pointer hover:text-indigo-600" onClick={onGoHome}>Home</span>
            <span>/</span>
            <span>Pseudocode</span>
            <span>/</span>
            <span className="text-gray-500">{currentDay.label}</span>
            <span>/</span>
            <span className="text-indigo-600 font-medium">{currentDay.sections[validIndex].icon} {currentDay.sections[validIndex].label}</span>
            <span className="ml-auto text-xs bg-gray-100 text-gray-500 px-3 py-1 rounded-full">{globalIndex + 1} of {totalSections}</span>
          </div>

          <CurrentComponent />

          <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-200">
            <button
              onClick={goPrev}
              disabled={globalIndex === 0}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                globalIndex === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              {globalIndex > 0 ? allSections[globalIndex - 1].label : 'Previous'}
            </button>
            <button
              onClick={goNext}
              disabled={globalIndex === allSections.length - 1}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                globalIndex === allSections.length - 1
                  ? 'text-gray-300 cursor-not-allowed'
                  : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:scale-105'
              }`}
            >
              {globalIndex < allSections.length - 1 ? allSections[globalIndex + 1].label : 'Finished!'}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
