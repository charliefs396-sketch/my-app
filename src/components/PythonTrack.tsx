import { useState, useEffect, useRef } from 'react';

// Day 1 sections
import PythonOverview from '../sections/python/PythonOverview';
import PythonSetup from '../sections/python/PythonSetup';
import PythonFirstProgram from '../sections/python/PythonFirstProgram';
import PythonInput from '../sections/python/PythonInput';
import PythonVsPseudocode from '../sections/python/PythonVsPseudocode';
import PythonExamFAQ from '../sections/python/PythonExamFAQ';
import PythonPractice from '../sections/python/PythonPractice';
import PythonQuiz from '../sections/python/PythonQuiz';
import PythonCheatsheet from '../sections/python/PythonCheatsheet';

// Day 2 sections
import Py2Overview from '../sections/python/day2/Py2Overview';

import Py2Arithmetic from '../sections/python/day2/Py2Arithmetic';
import Py2ComparisonLogical from '../sections/python/day2/Py2ComparisonLogical';
import Py2StringOps from '../sections/python/day2/Py2StringOps';
import Py2ExamFAQ from '../sections/python/day2/Py2ExamFAQ';
import Py2Practice from '../sections/python/day2/Py2Practice';
import Py2Quiz from '../sections/python/day2/Py2Quiz';
import Py2Cheatsheet from '../sections/python/day2/Py2Cheatsheet';

// Day 5 sections
import Py5Overview from '../sections/python/day5/Py5Overview';
import Py5Indexing from '../sections/python/day5/Py5Indexing';
import Py5Methods from '../sections/python/day5/Py5Methods';
import Py5AsciiChar from '../sections/python/day5/Py5AsciiChar';
import Py5ExamFAQ from '../sections/python/day5/Py5ExamFAQ';
import Py5Practice from '../sections/python/day5/Py5Practice';
import Py5Quiz from '../sections/python/day5/Py5Quiz';
import Py5Cheatsheet from '../sections/python/day5/Py5Cheatsheet';

// Day 4 sections
import Py4Overview from '../sections/python/day4/Py4Overview';
import Py4ForLoops from '../sections/python/day4/Py4ForLoops';
import Py4WhileLoops from '../sections/python/day4/Py4WhileLoops';
import Py4ExamFAQ from '../sections/python/day4/Py4ExamFAQ';
import Py4Practice from '../sections/python/day4/Py4Practice';
import Py4Quiz from '../sections/python/day4/Py4Quiz';
import Py4Cheatsheet from '../sections/python/day4/Py4Cheatsheet';

// Day 7 sections
import Py7Overview from '../sections/python/day7/Py7Overview';
import Py7ListComprehension from '../sections/python/day7/Py7ListComprehension';
import Py7NestedLoops from '../sections/python/day7/Py7NestedLoops';
import Py7ExamFAQ from '../sections/python/day7/Py7ExamFAQ';
import Py7Practice from '../sections/python/day7/Py7Practice';
import Py7Quiz from '../sections/python/day7/Py7Quiz';
import Py7Cheatsheet from '../sections/python/day7/Py7Cheatsheet';

// Day 6 sections
import Py6Overview from '../sections/python/day6/Py6Overview';
import Py6ListBasics from '../sections/python/day6/Py6ListBasics';
import Py6ListMethods from '../sections/python/day6/Py6ListMethods';
import Py6ListLoops from '../sections/python/day6/Py6ListLoops';
import Py6ExamFAQ from '../sections/python/day6/Py6ExamFAQ';
import Py6Practice from '../sections/python/day6/Py6Practice';
import Py6Quiz from '../sections/python/day6/Py6Quiz';
import Py6Cheatsheet from '../sections/python/day6/Py6Cheatsheet';

// Day 8 sections
import Py8Overview from '../sections/python/day8/Py8Overview';
import Py8Functions from '../sections/python/day8/Py8Functions';
import Py8Scope from '../sections/python/day8/Py8Scope';
import Py8ExamFAQ from '../sections/python/day8/Py8ExamFAQ';
import Py8Practice from '../sections/python/day8/Py8Practice';
import Py8Quiz from '../sections/python/day8/Py8Quiz';
import Py8Cheatsheet from '../sections/python/day8/Py8Cheatsheet';

// Day 3 sections
import Py3Overview from '../sections/python/day3/Py3Overview';
import Py3IfElse from '../sections/python/day3/Py3IfElse';
import Py3Elif from '../sections/python/day3/Py3Elif';
import Py3Nested from '../sections/python/day3/Py3Nested';
import Py3ExamFAQ from '../sections/python/day3/Py3ExamFAQ';
import Py3Practice from '../sections/python/day3/Py3Practice';
import Py3Quiz from '../sections/python/day3/Py3Quiz';
import Py3Cheatsheet from '../sections/python/day3/Py3Cheatsheet';

// Day 9 sections
import Py9Overview from '../sections/python/day9/Py9Overview';
import Py9LinearSearch from '../sections/python/day9/Py9LinearSearch';
import Py9Variations from '../sections/python/day9/Py9Variations';
import Py9ExamFAQ from '../sections/python/day9/Py9ExamFAQ';
import Py9Practice from '../sections/python/day9/Py9Practice';
import Py9Quiz from '../sections/python/day9/Py9Quiz';
import Py9Cheatsheet from '../sections/python/day9/Py9Cheatsheet';
import Py10Overview from '../sections/python/day10/Py10Overview';
import Py10BubbleSort from '../sections/python/day10/Py10BubbleSort';
import Py10Variations from '../sections/python/day10/Py10Variations';
import Py10ExamFAQ from '../sections/python/day10/Py10ExamFAQ';
import Py10Practice from '../sections/python/day10/Py10Practice';
import Py10Quiz from '../sections/python/day10/Py10Quiz';
import Py10Cheatsheet from '../sections/python/day10/Py10Cheatsheet';

// Day 11 sections
import Py11Overview from '../sections/python/day11/Py11Overview';
import Py11ReadWrite from '../sections/python/day11/Py11ReadWrite';
import Py11ProcessAppend from '../sections/python/day11/Py11ProcessAppend';
import Py11ExamFAQ from '../sections/python/day11/Py11ExamFAQ';
import Py11Practice from '../sections/python/day11/Py11Practice';
import Py11Quiz from '../sections/python/day11/Py11Quiz';
import Py11Cheatsheet from '../sections/python/day11/Py11Cheatsheet';
import Py12Overview from '../sections/python/day12/Py12Overview';
import Py12Classes from '../sections/python/day12/Py12Classes';
import Py12ArrayOfRecords from '../sections/python/day12/Py12ArrayOfRecords';
import Py12ExamFAQ from '../sections/python/day12/Py12ExamFAQ';
import Py12Practice from '../sections/python/day12/Py12Practice';
import Py12Quiz from '../sections/python/day12/Py12Quiz';
import Py12Cheatsheet from '../sections/python/day12/Py12Cheatsheet';

// Day 13 sections
import Py13Overview from '../sections/python/day13/Py13Overview';
import Py13Stack from '../sections/python/day13/Py13Stack';
import Py13Applications from '../sections/python/day13/Py13Applications';
import Py13ExamFAQ from '../sections/python/day13/Py13ExamFAQ';
import Py13Practice from '../sections/python/day13/Py13Practice';
import Py13Quiz from '../sections/python/day13/Py13Quiz';
import Py13Cheatsheet from '../sections/python/day13/Py13Cheatsheet';

// Day 14 sections
import Py14Overview from '../sections/python/day14/Py14Overview';
import Py14Queue from '../sections/python/day14/Py14Queue';
import Py14Applications from '../sections/python/day14/Py14Applications';
import Py14ExamFAQ from '../sections/python/day14/Py14ExamFAQ';
import Py14Practice from '../sections/python/day14/Py14Practice';
import Py14Quiz from '../sections/python/day14/Py14Quiz';
import Py14Cheatsheet from '../sections/python/day14/Py14Cheatsheet';

// Day 15 sections
import Py15Overview from '../sections/python/day15/Py15Overview';
import Py15BinarySearch from '../sections/python/day15/Py15BinarySearch';
import Py15Variations from '../sections/python/day15/Py15Variations';
import Py15ExamFAQ from '../sections/python/day15/Py15ExamFAQ';
import Py15Practice from '../sections/python/day15/Py15Practice';
import Py15Quiz from '../sections/python/day15/Py15Quiz';
import Py15Cheatsheet from '../sections/python/day15/Py15Cheatsheet';

// Day 16 sections
import Py16Overview from '../sections/python/day16/Py16Overview';
import Py16InsertionSort from '../sections/python/day16/Py16InsertionSort';
import Py16Variations from '../sections/python/day16/Py16Variations';
import Py16ExamFAQ from '../sections/python/day16/Py16ExamFAQ';
import Py16Practice from '../sections/python/day16/Py16Practice';
import Py16Quiz from '../sections/python/day16/Py16Quiz';
import Py16Cheatsheet from '../sections/python/day16/Py16Cheatsheet';

// Day 17 sections
import Py17Overview from '../sections/python/day17/Py17Overview';
import Py17Recursion from '../sections/python/day17/Py17Recursion';
import Py17Trace from '../sections/python/day17/Py17Trace';
import Py17RecursionVsIteration from '../sections/python/day17/Py17RecursionVsIteration';
import Py17ExamFAQ from '../sections/python/day17/Py17ExamFAQ';
import Py17Practice from '../sections/python/day17/Py17Practice';
import Py17Quiz from '../sections/python/day17/Py17Quiz';
import Py17Cheatsheet from '../sections/python/day17/Py17Cheatsheet';

// Day 18 sections
import Py18Overview from '../sections/python/day18/Py18Overview';
import Py18LinkedList from '../sections/python/day18/Py18LinkedList';
import Py18Trace from '../sections/python/day18/Py18Trace';
import Py18ExamFAQ from '../sections/python/day18/Py18ExamFAQ';
import Py18Practice from '../sections/python/day18/Py18Practice';
import Py18Quiz from '../sections/python/day18/Py18Quiz';
import Py18Cheatsheet from '../sections/python/day18/Py18Cheatsheet';

// Day 19 sections
import Py19Overview from '../sections/python/day19/Py19Overview';
import Py19BinaryTrees from '../sections/python/day19/Py19BinaryTrees';
import Py19Traversal from '../sections/python/day19/Py19Traversal';
import Py19ExamFAQ from '../sections/python/day19/Py19ExamFAQ';
import Py19Practice from '../sections/python/day19/Py19Practice';
import Py19Quiz from '../sections/python/day19/Py19Quiz';
import Py19Cheatsheet from '../sections/python/day19/Py19Cheatsheet';

const days = [
  {
    id: 'day1',
    dayNum: 1,
    label: 'Setup & First Program',
    subtitle: 'Variables, input, output',
    color: 'from-emerald-500 to-teal-500',
    sections: [
      { id: 'py1-overview', label: 'Overview', icon: '🎯', component: PythonOverview },
      { id: 'py1-setup', label: 'Setup', icon: '⚙️', component: PythonSetup },
      { id: 'py1-first', label: 'First Program', icon: '🚀', component: PythonFirstProgram },
      { id: 'py1-input', label: 'Input & Types', icon: '⌨️', component: PythonInput },
      { id: 'py1-compare', label: 'vs Pseudocode', icon: '🔄', component: PythonVsPseudocode },
      { id: 'py1-faq', label: 'Exam FAQ', icon: '❓', component: PythonExamFAQ },
      { id: 'py1-practice', label: 'Practice', icon: '✍️', component: PythonPractice },
      { id: 'py1-quiz', label: 'Quiz', icon: '🧠', component: PythonQuiz },
      { id: 'py1-cheatsheet', label: 'Cheatsheet', icon: '📋', component: PythonCheatsheet },
    ],
  },
  {
    id: 'day2',
    dayNum: 2,
    label: 'Operators',
    subtitle: 'Arithmetic, comparison, logical',
    color: 'from-green-500 to-emerald-600',
    sections: [
      { id: 'py2-overview', label: 'Overview', icon: '🎯', component: Py2Overview },
      { id: 'py2-arithmetic', label: 'Arithmetic Operators', icon: '➕', component: Py2Arithmetic },
      { id: 'py2-comparison', label: 'Comparison & Logical', icon: '⚖️', component: Py2ComparisonLogical },
      { id: 'py2-strings', label: 'String Operations', icon: '🔗', component: Py2StringOps },
      { id: 'py2-faq', label: 'Exam FAQ', icon: '❓', component: Py2ExamFAQ },
      { id: 'py2-practice', label: 'Practice', icon: '✍️', component: Py2Practice },
      { id: 'py2-quiz', label: 'Quiz', icon: '🧠', component: Py2Quiz },
      { id: 'py2-cheatsheet', label: 'Cheatsheet', icon: '📋', component: Py2Cheatsheet },
    ],
  },
  {
    id: 'day3',
    dayNum: 3,
    label: 'IF Statements',
    subtitle: 'Selection, elif, nested, and/or',
    color: 'from-teal-500 to-cyan-500',
    sections: [
      { id: 'py3-overview', label: 'Overview', icon: '🎯', component: Py3Overview },
      { id: 'py3-ifelse', label: 'IF & ELSE', icon: '🔀', component: Py3IfElse },
      { id: 'py3-elif', label: 'elif Chains', icon: '🪜', component: Py3Elif },
      { id: 'py3-nested', label: 'Nested IF & Logical', icon: '🪆', component: Py3Nested },
      { id: 'py3-faq', label: 'Exam FAQ', icon: '❓', component: Py3ExamFAQ },
      { id: 'py3-practice', label: 'Practice', icon: '✍️', component: Py3Practice },
      { id: 'py3-quiz', label: 'Quiz', icon: '🧠', component: Py3Quiz },
      { id: 'py3-cheatsheet', label: 'Cheatsheet', icon: '📋', component: Py3Cheatsheet },
    ],
  },
  {
    id: 'day4',
    dayNum: 4,
    label: 'Loops',
    subtitle: 'for, while, range(), break',
    color: 'from-cyan-500 to-blue-500',
    sections: [
      { id: 'py4-overview', label: 'Overview', icon: '🎯', component: Py4Overview },
      { id: 'py4-for', label: 'FOR Loops & range()', icon: '🔢', component: Py4ForLoops },
      { id: 'py4-while', label: 'WHILE Loops & break', icon: '🔄', component: Py4WhileLoops },
      { id: 'py4-faq', label: 'Exam FAQ', icon: '❓', component: Py4ExamFAQ },
      { id: 'py4-practice', label: 'Practice', icon: '✍️', component: Py4Practice },
      { id: 'py4-quiz', label: 'Quiz', icon: '🧠', component: Py4Quiz },
      { id: 'py4-cheatsheet', label: 'Cheatsheet', icon: '📋', component: Py4Cheatsheet },
    ],
  },
  {
    id: 'day5',
    dayNum: 5,
    label: 'Strings',
    subtitle: 'Indexing, slicing, methods, ASCII',
    color: 'from-violet-500 to-purple-600',
    sections: [
      { id: 'py5-overview', label: 'Overview', icon: '🎯', component: Py5Overview },
      { id: 'py5-indexing', label: 'Indexing & Slicing', icon: '📏', component: Py5Indexing },
      { id: 'py5-methods', label: 'String Methods', icon: '🔧', component: Py5Methods },
      { id: 'py5-ascii', label: 'ASCII & Char Processing', icon: '🔢', component: Py5AsciiChar },
      { id: 'py5-faq', label: 'Exam FAQ', icon: '❓', component: Py5ExamFAQ },
      { id: 'py5-practice', label: 'Practice', icon: '✍️', component: Py5Practice },
      { id: 'py5-quiz', label: 'Quiz', icon: '🧠', component: Py5Quiz },
      { id: 'py5-cheatsheet', label: 'Cheatsheet', icon: '📋', component: Py5Cheatsheet },
    ],
  },
  {
    id: 'day6',
    dayNum: 6,
    label: 'Lists',
    subtitle: 'Lists, methods, loops, patterns',
    color: 'from-rose-500 to-pink-500',
    sections: [
      { id: 'py6-overview', label: 'Overview', icon: '🎯', component: Py6Overview },
      { id: 'py6-basics', label: 'List Basics', icon: '📦', component: Py6ListBasics },
      { id: 'py6-methods', label: 'List Methods', icon: '🔧', component: Py6ListMethods },
      { id: 'py6-loops', label: 'Loops & Lists', icon: '🔄', component: Py6ListLoops },
      { id: 'py6-faq', label: 'Exam FAQ', icon: '❓', component: Py6ExamFAQ },
      { id: 'py6-practice', label: 'Practice', icon: '✍️', component: Py6Practice },
      { id: 'py6-quiz', label: 'Quiz', icon: '🧠', component: Py6Quiz },
      { id: 'py6-cheatsheet', label: 'Cheatsheet', icon: '📋', component: Py6Cheatsheet },
    ],
  },
  {
    id: 'day7',
    dayNum: 7,
    label: '2D Lists',
    subtitle: 'Nested lists, comprehension, nested loops',
    color: 'from-teal-500 to-cyan-500',
    sections: [
      { id: 'py7-overview', label: 'Overview', icon: '🎯', component: Py7Overview },
      { id: 'py7-comprehension', label: 'List Comprehension', icon: '🏗️', component: Py7ListComprehension },
      { id: 'py7-loops', label: 'Nested Loops', icon: '🔁', component: Py7NestedLoops },
      { id: 'py7-faq', label: 'Exam FAQ', icon: '❓', component: Py7ExamFAQ },
      { id: 'py7-practice', label: 'Practice', icon: '✍️', component: Py7Practice },
      { id: 'py7-quiz', label: 'Quiz', icon: '🧠', component: Py7Quiz },
      { id: 'py7-cheatsheet', label: 'Cheatsheet', icon: '📋', component: Py7Cheatsheet },
    ],
  },
  {
    id: 'day8',
    dayNum: 8,
    label: 'Functions & Procedures',
    subtitle: 'def, return, scope, global',
    color: 'from-violet-500 to-purple-500',
    sections: [
      { id: 'py8-overview', label: 'Overview', icon: '🎯', component: Py8Overview },
      { id: 'py8-functions', label: 'Writing Functions', icon: '🔧', component: Py8Functions },
      { id: 'py8-scope', label: 'Scope & Global', icon: '🌍', component: Py8Scope },
      { id: 'py8-faq', label: 'Exam FAQ', icon: '❓', component: Py8ExamFAQ },
      { id: 'py8-practice', label: 'Practice', icon: '✍️', component: Py8Practice },
      { id: 'py8-quiz', label: 'Quiz', icon: '🧠', component: Py8Quiz },
      { id: 'py8-cheatsheet', label: 'Cheatsheet', icon: '📋', component: Py8Cheatsheet },
    ],
  },
  {
    id: 'day9',
    dayNum: 9,
    label: 'Linear Search',
    subtitle: 'Search, count, find all positions',
    color: 'from-amber-500 to-orange-500',
    sections: [
      { id: 'py9-overview', label: 'Overview', icon: '🎯', component: Py9Overview },
      { id: 'py9-search', label: 'Linear Search', icon: '🔍', component: Py9LinearSearch },
      { id: 'py9-variations', label: 'Count & Find All', icon: '🔢', component: Py9Variations },
      { id: 'py9-faq', label: 'Exam FAQ', icon: '❓', component: Py9ExamFAQ },
      { id: 'py9-practice', label: 'Practice', icon: '✍️', component: Py9Practice },
      { id: 'py9-quiz', label: 'Quiz', icon: '🧠', component: Py9Quiz },
      { id: 'py9-cheatsheet', label: 'Cheatsheet', icon: '📋', component: Py9Cheatsheet },
    ],
  },
  {
    id: 'day10', dayNum: 10, label: 'Day 10', subtitle: 'Bubble Sort', color: 'from-rose-500 to-red-500',
    sections: [
      { id: 'py10-overview', label: 'Overview', icon: '🎯', component: Py10Overview },
      { id: 'py10-algorithm', label: 'Bubble Sort', icon: '🫧', component: Py10BubbleSort },
      { id: 'py10-variations', label: 'Variations', icon: '🔄', component: Py10Variations },
      { id: 'py10-faq', label: 'Exam FAQ', icon: '❓', component: Py10ExamFAQ },
      { id: 'py10-practice', label: 'Practice', icon: '✍️', component: Py10Practice },
      { id: 'py10-quiz', label: 'Quiz', icon: '🧠', component: Py10Quiz },
      { id: 'py10-cheatsheet', label: 'Cheatsheet', icon: '📋', component: Py10Cheatsheet },
    ],
  },
  {
    id: 'day11', dayNum: 11, label: 'Day 11', subtitle: 'File Handling', color: 'from-emerald-500 to-teal-500',
    sections: [
      { id: 'py11-overview', label: 'Overview', icon: '🎯', component: Py11Overview },
      { id: 'py11-readwrite', label: 'Read & Write', icon: '📖', component: Py11ReadWrite },
      { id: 'py11-append', label: 'Process & Append', icon: '📝', component: Py11ProcessAppend },
      { id: 'py11-faq', label: 'Exam FAQ', icon: '❓', component: Py11ExamFAQ },
      { id: 'py11-practice', label: 'Practice', icon: '✍️', component: Py11Practice },
      { id: 'py11-quiz', label: 'Quiz', icon: '🧠', component: Py11Quiz },
      { id: 'py11-cheatsheet', label: 'Cheatsheet', icon: '📋', component: Py11Cheatsheet },
    ],
  },
  {
    id: 'day12', dayNum: 12, label: 'Day 12', subtitle: 'Records using Classes', color: 'from-teal-500 to-cyan-500',
    sections: [
      { id: 'py12-overview', label: 'Overview', icon: '🎯', component: Py12Overview },
      { id: 'py12-classes', label: 'Classes as Records', icon: '📦', component: Py12Classes },
      { id: 'py12-array', label: 'Array of Records', icon: '📋', component: Py12ArrayOfRecords },
      { id: 'py12-faq', label: 'Exam FAQ', icon: '❓', component: Py12ExamFAQ },
      { id: 'py12-practice', label: 'Practice', icon: '✍️', component: Py12Practice },
      { id: 'py12-quiz', label: 'Quiz', icon: '🧠', component: Py12Quiz },
      { id: 'py12-cheatsheet', label: 'Cheatsheet', icon: '📋', component: Py12Cheatsheet },
    ],
  },
  {
    id: 'day13', dayNum: 13, label: 'Stack', subtitle: 'LIFO, push, pop, peek, applications',
    color: 'from-emerald-500 to-teal-500',
    sections: [
      { id: 'py13-overview', label: 'Overview', icon: '🎯', component: Py13Overview },
      { id: 'py13-stack', label: 'Stack Implementation', icon: '📚', component: Py13Stack },
      { id: 'py13-apps', label: 'Applications', icon: '🔧', component: Py13Applications },
      { id: 'py13-faq', label: 'Exam FAQ', icon: '❓', component: Py13ExamFAQ },
      { id: 'py13-practice', label: 'Practice', icon: '✍️', component: Py13Practice },
      { id: 'py13-quiz', label: 'Quiz', icon: '🧠', component: Py13Quiz },
      { id: 'py13-cheatsheet', label: 'Cheatsheet', icon: '📋', component: Py13Cheatsheet },
    ],
  },
  {
    id: 'day14', dayNum: 14, label: 'Queue', subtitle: 'FIFO, enqueue, dequeue, circular queue',
    color: 'from-teal-500 to-emerald-600',
    sections: [
      { id: 'py14-overview', label: 'Overview', icon: '🎯', component: Py14Overview },
      { id: 'py14-queue', label: 'Queue Implementation', icon: '🔧', component: Py14Queue },
      { id: 'py14-apps', label: 'Applications', icon: '🔄', component: Py14Applications },
      { id: 'py14-faq', label: 'Exam FAQ', icon: '❓', component: Py14ExamFAQ },
      { id: 'py14-practice', label: 'Practice', icon: '✍️', component: Py14Practice },
      { id: 'py14-quiz', label: 'Quiz', icon: '🧠', component: Py14Quiz },
      { id: 'py14-cheatsheet', label: 'Cheatsheet', icon: '📋', component: Py14Cheatsheet },
    ],
  },
  {
    id: 'day15', dayNum: 15, label: 'Binary Search', subtitle: 'low/high/mid, trace tables, O(log n)',
    color: 'from-cyan-500 to-blue-500',
    sections: [
      { id: 'py15-overview', label: 'Overview', icon: '🎯', component: Py15Overview },
      { id: 'py15-search', label: 'Binary Search', icon: '🔍', component: Py15BinarySearch },
      { id: 'py15-variations', label: 'Variations', icon: '🔄', component: Py15Variations },
      { id: 'py15-faq', label: 'Exam FAQ', icon: '❓', component: Py15ExamFAQ },
      { id: 'py15-practice', label: 'Practice', icon: '✍️', component: Py15Practice },
      { id: 'py15-quiz', label: 'Quiz', icon: '🧠', component: Py15Quiz },
      { id: 'py15-cheatsheet', label: 'Cheatsheet', icon: '📋', component: Py15Cheatsheet },
    ],
  },
  {
    id: 'day16', dayNum: 16, label: 'Insertion Sort', subtitle: 'key, j pointer, shifting, variations',
    color: 'from-indigo-500 to-violet-500',
    sections: [
      { id: 'py16-overview', label: 'Overview', icon: '🎯', component: Py16Overview },
      { id: 'py16-sort', label: 'Insertion Sort', icon: '📥', component: Py16InsertionSort },
      { id: 'py16-variations', label: 'Variations', icon: '🔄', component: Py16Variations },
      { id: 'py16-faq', label: 'Exam FAQ', icon: '❓', component: Py16ExamFAQ },
      { id: 'py16-practice', label: 'Practice', icon: '✍️', component: Py16Practice },
      { id: 'py16-quiz', label: 'Quiz', icon: '🧠', component: Py16Quiz },
      { id: 'py16-cheatsheet', label: 'Cheatsheet', icon: '📋', component: Py16Cheatsheet },
    ],
  },
  {
    id: 'day17', dayNum: 17, label: 'Recursion', subtitle: 'base case, recursive case, tracing',
    color: 'from-violet-500 to-indigo-600',
    sections: [
      { id: 'py17-overview', label: 'Overview', icon: '🎯', component: Py17Overview },
      { id: 'py17-recursion', label: 'Recursive Functions', icon: '🔁', component: Py17Recursion },
      { id: 'py17-trace', label: 'Trace Tables', icon: '📋', component: Py17Trace },
      { id: 'py17-compare', label: 'Recursion vs Iteration', icon: '🆚', component: Py17RecursionVsIteration },
      { id: 'py17-faq', label: 'Exam FAQ', icon: '❓', component: Py17ExamFAQ },
      { id: 'py17-practice', label: 'Practice', icon: '✍️', component: Py17Practice },
      { id: 'py17-quiz', label: 'Quiz', icon: '🧠', component: Py17Quiz },
      { id: 'py17-cheatsheet', label: 'Cheatsheet', icon: '📋', component: Py17Cheatsheet },
    ],
  },
  {
    id: 'day18', dayNum: 18, label: 'Linked Lists', subtitle: 'nodes, head, insert, search, delete',
    color: 'from-sky-500 to-cyan-600',
    sections: [
      { id: 'py18-overview', label: 'Overview', icon: '🎯', component: Py18Overview },
      { id: 'py18-linkedlist', label: 'Linked List Class', icon: '🔗', component: Py18LinkedList },
      { id: 'py18-trace', label: 'Trace Through', icon: '📋', component: Py18Trace },
      { id: 'py18-faq', label: 'Exam FAQ', icon: '❓', component: Py18ExamFAQ },
      { id: 'py18-practice', label: 'Practice', icon: '✍️', component: Py18Practice },
      { id: 'py18-quiz', label: 'Quiz', icon: '🧠', component: Py18Quiz },
      { id: 'py18-cheatsheet', label: 'Cheatsheet', icon: '📋', component: Py18Cheatsheet },
    ],
  },
  {
    id: 'day19', dayNum: 19, label: 'Binary Trees', subtitle: 'BST insert, search, traversal',
    color: 'from-emerald-500 to-sky-600',
    sections: [
      { id: 'py19-overview', label: 'Overview', icon: '🎯', component: Py19Overview },
      { id: 'py19-bst', label: 'Binary Trees & BST', icon: '🌳', component: Py19BinaryTrees },
      { id: 'py19-traversal', label: 'Traversal & Trace', icon: '🔍', component: Py19Traversal },
      { id: 'py19-faq', label: 'Exam FAQ', icon: '❓', component: Py19ExamFAQ },
      { id: 'py19-practice', label: 'Practice', icon: '✍️', component: Py19Practice },
      { id: 'py19-quiz', label: 'Quiz', icon: '🧠', component: Py19Quiz },
      { id: 'py19-cheatsheet', label: 'Cheatsheet', icon: '📋', component: Py19Cheatsheet },
    ],
  },
];

const studyTips: Record<number, string> = {
  1: "Type the code yourself instead of copy-pasting. Muscle memory helps you learn faster!",
  2: "Remember: / gives float, // gives integer. And = is assignment, == is comparison!",
  3: "Use elif instead of nested IFs whenever possible — it's cleaner and less error-prone. Always check your colons and indentation!",
  4: "Remember: range(1, 11) goes 1 to 10 — stop is EXCLUDED! And while True + break = REPEAT...UNTIL. Always initialise accumulators BEFORE the loop!",
  5: "Python is 0-indexed! text[0] is first, text[-1] is last. Slicing stop is NOT included. Always .lower() before comparing strings, and use % 26 in Caesar cipher to wrap around!",
  6: "Lists are 0-indexed in Python but 1-indexed in pseudocode! Always initialise max/min to list[0] not 0. NEVER do list2 = list1 to copy — use list2 = list1.copy() instead!",
  14: "Queue = FIFO. Enqueue adds to REAR, Dequeue removes from FRONT. Use % MAXSIZE to wrap around. Always use size to check full/empty, not front/rear!",
  15: "Data MUST be sorted before binary search! Python: low=0, high=len-1 (0-indexed). Use // not / for mid. Return -1 means not found. Binary search is O(log n) — 1 million items = just 20 comparisons!",
  7: "NEVER use [[0]*4]*3 for 2D lists — all rows share the same object! Always use [[0]*4 for _ in range(3)]. Row comes FIRST: marks[row][col]. For column processing, swap the outer/inner loops!",
  8: "Use return to send values back — print() inside a function doesn't return anything! Remember: you only need 'global x' to MODIFY a global, not just read it. Best practice: pass parameters in, return results out!",
  13: "Remember: top = -1 means EMPTY stack (0-indexed). Always use 'global top' inside push/pop. Stack Overflow = full, Stack Underflow = empty. LIFO = Last In First Out!",
  16: "Insertion sort keeps the LEFT side sorted. Save the key first, shift bigger items right, then insert key into the gap. Python is 0-indexed, so use j >= 0 not j > 0!",
  17: "Every recursive function needs a base case, a recursive case, and progress toward the base case. Trace calls going down first, then returns coming back up.",
  18: "In a linked list, each node stores data and a pointer to the next node. head points to the first node, and the last node points to None.",
  19: "Binary search trees follow one key rule: smaller values go left, bigger values go right. In-order traversal prints the tree in sorted order.",
};

interface Props {
  onGoHome: () => void;
  completedSections: Set<string>;
  onUpdateCompleted: (sections: Set<string>) => void;
}

export default function PythonTrack({ onGoHome, completedSections, onUpdateCompleted }: Props) {
  const [currentDayId, setCurrentDayId] = useState('day1');
  const [activeSectionId, setActiveSectionId] = useState('py1-overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dayDropdownOpen, setDayDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentDay = days.find(d => d.id === currentDayId) || days[0];
  const allSections = days.flatMap(d => d.sections);
  const activeSection = currentDay.sections.find(s => s.id === activeSectionId) || currentDay.sections[0];
  const ActiveComponent = activeSection.component;

  const totalSections = allSections.length;
  const completedCount = completedSections.size;
  const overallProgress = Math.round((completedCount / totalSections) * 100);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDayDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const navigateTo = (sectionId: string, dayId?: string) => {
    if (dayId) setCurrentDayId(dayId);
    setActiveSectionId(sectionId);
    setSidebarOpen(false);
    setDayDropdownOpen(false);
    const newSet = new Set(completedSections);
    newSet.add(activeSectionId);
    onUpdateCompleted(newSet);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNext = () => {
    const currentIndex = allSections.findIndex(s => s.id === activeSectionId);
    if (currentIndex < allSections.length - 1) {
      const nextSection = allSections[currentIndex + 1];
      const nextDay = days.find(d => d.sections.some(s => s.id === nextSection.id));
      navigateTo(nextSection.id, nextDay?.id);
    }
  };

  const handlePrev = () => {
    const currentIndex = allSections.findIndex(s => s.id === activeSectionId);
    if (currentIndex > 0) {
      const prevSection = allSections[currentIndex - 1];
      const prevDay = days.find(d => d.sections.some(s => s.id === prevSection.id));
      navigateTo(prevSection.id, prevDay?.id);
    }
  };

  const currentGlobalIndex = allSections.findIndex(s => s.id === activeSectionId);
  const isFirst = currentGlobalIndex === 0;
  const isLast = currentGlobalIndex === allSections.length - 1;

  const getDayProgress = (day: typeof days[0]) => {
    const completed = day.sections.filter(s => completedSections.has(s.id)).length;
    return Math.round((completed / day.sections.length) * 100);
  };

  return (
    <div className="min-h-screen flex">
      {/* Mobile toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-white shadow-lg rounded-xl p-3 hover:bg-gray-50 transition-all"
      >
        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {sidebarOpen
            ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
        </svg>
      </button>

      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/30 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={
        'fixed lg:sticky top-0 left-0 h-screen w-72 bg-white border-r border-gray-200 z-40 transition-transform duration-300 flex flex-col ' +
        (sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0')
      }>
        {/* Header */}
        <div className="p-5 border-b border-gray-100">
          <button onClick={onGoHome} className="text-sm text-emerald-600 hover:text-emerald-800 font-medium flex items-center gap-1 mb-4 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </button>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center text-xl shadow-md">
              🐍
            </div>
            <div>
              <h1 className="text-lg font-extrabold text-gray-900">Python Track</h1>
              <p className="text-xs text-gray-400">Cambridge A Level 9618</p>
            </div>
          </div>

          {/* Progress */}
          <div>
            <div className="flex justify-between text-xs text-gray-500 mb-1.5">
              <span className="font-semibold">Overall Progress</span>
              <span className="font-bold text-emerald-600">{overallProgress}%</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-500"
                style={{ width: `${overallProgress}%` }}
              />
            </div>
            <p className="text-xs text-gray-400 mt-1">{completedCount} of {totalSections} sections done</p>
          </div>
        </div>

        {/* Day Selector Dropdown */}
        <div className="p-4 border-b border-gray-100" ref={dropdownRef}>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Current Day</p>
          <button
            onClick={() => setDayDropdownOpen(!dayDropdownOpen)}
            className="w-full flex items-center gap-3 p-3 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl hover:border-emerald-300 transition-all"
          >
            <span className={`w-8 h-8 rounded-lg bg-gradient-to-br ${currentDay.color} text-white text-sm font-bold flex items-center justify-center shadow-sm`}>
              {currentDay.dayNum}
            </span>
            <div className="flex-1 text-left">
              <p className="text-sm font-bold text-gray-900">Day {currentDay.dayNum}: {currentDay.label}</p>
              <p className="text-xs text-gray-500">{currentDay.subtitle}</p>
            </div>
            <svg className={`w-4 h-4 text-gray-400 transition-transform ${dayDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </button>

          {dayDropdownOpen && (
            <div className="mt-2 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden z-50">
              {days.map((day) => {
                const dayProg = getDayProgress(day);
                const isActive = day.id === currentDayId;
                return (
                  <button
                    key={day.id}
                    onClick={() => {
                      setCurrentDayId(day.id);
                      setActiveSectionId(day.sections[0].id);
                      setDayDropdownOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 p-3 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0 ${isActive ? 'bg-emerald-50' : ''}`}
                  >
                    <span className={`w-8 h-8 rounded-lg bg-gradient-to-br ${day.color} text-white text-sm font-bold flex items-center justify-center shadow-sm`}>
                      {day.dayNum}
                    </span>
                    <div className="flex-1 text-left">
                      <p className="text-sm font-semibold text-gray-800">Day {day.dayNum}: {day.label}</p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${dayProg}%` }} />
                        </div>
                        <span className="text-xs text-gray-400">{dayProg}%</span>
                      </div>
                    </div>
                    {isActive && <span className="w-2 h-2 bg-emerald-500 rounded-full" />}
                  </button>
                );
              })}
              <div className="p-3 bg-gray-50">
                <p className="text-xs text-gray-400 text-center">More days coming soon...</p>
                <div className="flex gap-1 mt-2 justify-center flex-wrap">
                  {Array.from({ length: 7 }, (_, i) => i + 6).map(n => (
                    <span key={n} className="w-7 h-7 rounded-lg bg-gray-200 text-gray-400 text-xs font-bold flex items-center justify-center">
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Section Navigation */}
        <nav className="flex-1 p-4 overflow-y-auto">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-1">
            Day {currentDay.dayNum} Sections
          </p>
          <div className="space-y-1">
            {currentDay.sections.map((section) => {
              const isActive = activeSectionId === section.id;
              const isCompleted = completedSections.has(section.id);
              return (
                <button
                  key={section.id}
                  onClick={() => navigateTo(section.id, currentDay.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-xl font-medium text-sm flex items-center gap-3 transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md shadow-emerald-200'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-sm flex-shrink-0 ${
                    isActive ? 'bg-white/20' : isCompleted ? 'bg-green-100 text-green-700' : 'bg-gray-100'
                  }`}>
                    {isCompleted && !isActive ? '✓' : section.icon}
                  </span>
                  <span>{section.label}</span>
                  {isActive && <span className="ml-auto w-1.5 h-1.5 bg-white rounded-full" />}
                </button>
              );
            })}
          </div>
        </nav>

        {/* Study tip */}
        <div className="p-4 border-t border-gray-100">
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-3 rounded-xl">
            <p className="text-xs font-bold text-emerald-700 mb-1">💡 Tip</p>
            <p className="text-xs text-emerald-600">{studyTips[currentDay.dayNum] || "Keep practicing — every line of code makes you better!"}</p>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 min-h-screen">
        {/* Top progress bar */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur border-b border-gray-200">
          <div className="h-1 bg-gray-100">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-500"
              style={{ width: `${overallProgress}%` }}
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-8 pl-12 lg:pl-0 flex-wrap">
            <span className="cursor-pointer hover:text-emerald-600 transition-colors" onClick={onGoHome}>Home</span>
            <span>/</span>
            <span className="cursor-pointer hover:text-emerald-600 transition-colors" onClick={() => setDayDropdownOpen(true)}>
              Python
            </span>
            <span>/</span>
            <span className="text-gray-500">Day {currentDay.dayNum}</span>
            <span>/</span>
            <span className="text-emerald-600 font-medium">{activeSection.icon} {activeSection.label}</span>
            <span className="ml-auto text-xs bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full font-semibold">
              {currentGlobalIndex + 1} of {totalSections}
            </span>
          </div>

          {/* Section content */}
          <ActiveComponent />

          {/* Navigation buttons */}
          <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-200">
            <button
              onClick={handlePrev}
              disabled={isFirst}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                isFirst
                  ? 'text-gray-300 cursor-not-allowed'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {!isFirst ? allSections[currentGlobalIndex - 1]?.label : 'Previous'}
            </button>

            <button
              onClick={handleNext}
              disabled={isLast}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                isLast
                  ? 'text-gray-300 cursor-not-allowed'
                  : 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:shadow-lg hover:scale-105'
              }`}
            >
              {!isLast ? allSections[currentGlobalIndex + 1]?.label : 'All Done!'}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
