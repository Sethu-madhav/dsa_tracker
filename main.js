// --- Data: Enhanced Tasks with Week Info and Hours ---
const tasks = [
    // Week 1
    { id: 1, week: 1, weekTitle: "Week 1: Arrays, Binary Search, Sorting (80 Problems)", day: 1, topic: "Arrays (Easy)", details: "Reverse array, Max/min, Linear search", hours: 4, problemCount: 3, completed: false },
    { id: 2, week: 1, weekTitle: "Week 1: Arrays, Binary Search, Sorting (80 Problems)", day: 2, topic: "Arrays (Medium)", details: "Subarrays (Kadane's algo), Prefix sum, 2-pointer", hours: 5, problemCount: 3, completed: false },
    { id: 3, week: 1, weekTitle: "Week 1: Arrays, Binary Search, Sorting (80 Problems)", day: 3, topic: "Arrays (Hard)", details: "Merge intervals, Rotate matrix, Trapping rainwater", hours: 5, problemCount: 3, completed: false },
    { id: 4, week: 1, weekTitle: "Week 1: Arrays, Binary Search, Sorting (80 Problems)", day: 4, topic: "Binary Search (Basics)", details: "First/last occurrence, Search in rotated array", hours: 4, problemCount: 2, completed: false },
    { id: 5, week: 1, weekTitle: "Week 1: Arrays, Binary Search, Sorting (80 Problems)", day: 5, topic: "Binary Search (Advanced)", details: "Median of 2 arrays, Aggressive cows, Book allocation", hours: 5, problemCount: 3, completed: false },
    { id: 6, week: 1, weekTitle: "Week 1: Arrays, Binary Search, Sorting (80 Problems)", day: 6, topic: "Sorting (Basics)", details: "Merge/Quick sort, Count inversions", hours: 4, problemCount: 2, completed: false },
    { id: 7, week: 1, weekTitle: "Week 1: Arrays, Binary Search, Sorting (80 Problems)", day: 7, topic: "Revision & Mock Test", details: "Re-attempt tough problems, 1 mock interview (LeetCode)", hours: 4, problemCount: 5, completed: false },
    // Week 2
    { id: 8, week: 2, weekTitle: "Week 2: Linked Lists, Stacks, Queues (70 Problems)", day: 8, topic: "Linked Lists (Easy)", details: "Reverse LL, Detect cycle, Merge 2 sorted LL", hours: 4, problemCount: 3, completed: false },
    { id: 9, week: 2, weekTitle: "Week 2: Linked Lists, Stacks, Queues (70 Problems)", day: 9, topic: "Linked Lists (Hard)", details: "Palindrome LL, Flattening LL, LRU cache", hours: 5, problemCount: 3, completed: false },
    { id: 10, week: 2, weekTitle: "Week 2: Linked Lists, Stacks, Queues (70 Problems)", day: 10, topic: "Stacks (Basics)", details: "Valid parentheses, Next greater element", hours: 4, problemCount: 2, completed: false },
    { id: 11, week: 2, weekTitle: "Week 2: Linked Lists, Stacks, Queues (70 Problems)", day: 11, topic: "Stacks (Advanced)", details: "Largest rectangle in histogram, Min stack", hours: 5, problemCount: 2, completed: false },
    { id: 12, week: 2, weekTitle: "Week 2: Linked Lists, Stacks, Queues (70 Problems)", day: 12, topic: "Queues (Basics)", details: "Implement queue using stacks, Sliding window max", hours: 4, problemCount: 2, completed: false },
    { id: 13, week: 2, weekTitle: "Week 2: Linked Lists, Stacks, Queues (70 Problems)", day: 13, topic: "Mixed Practice", details: "Solve 5-6 problems from past topics", hours: 5, problemCount: 6, completed: false },
    { id: 14, week: 2, weekTitle: "Week 2: Linked Lists, Stacks, Queues (70 Problems)", day: 14, topic: "Revision & Mock Test", details: "Re-attempt tough problems, 1 mock interview", hours: 4, problemCount: 5, completed: false },
    // Week 3
    { id: 15, week: 3, weekTitle: "Week 3: Strings, Recursion, Hashing (75 Problems)", day: 15, topic: "Strings (Easy)", details: "Reverse string, Valid anagram, Longest common prefix", hours: 4, problemCount: 3, completed: false },
    { id: 16, week: 3, weekTitle: "Week 3: Strings, Recursion, Hashing (75 Problems)", day: 16, topic: "Strings (Hard)", details: "Longest substring without repeating chars, Palindromic substrings", hours: 5, problemCount: 2, completed: false },
    { id: 17, week: 3, weekTitle: "Week 3: Strings, Recursion, Hashing (75 Problems)", day: 17, topic: "Recursion (Basics)", details: "Fibonacci, Tower of Hanoi, Subset generation", hours: 4, problemCount: 3, completed: false },
    { id: 18, week: 3, weekTitle: "Week 3: Strings, Recursion, Hashing (75 Problems)", day: 18, topic: "Recursion (Advanced)", details: "Permutations, N-Queens, Sudoku solver", hours: 5, problemCount: 3, completed: false },
    { id: 19, week: 3, weekTitle: "Week 3: Strings, Recursion, Hashing (75 Problems)", day: 19, topic: "Hashing (Basics)", details: "Two sum, Frequency count, Subarray sum = K", hours: 4, problemCount: 3, completed: false },
    { id: 20, week: 3, weekTitle: "Week 3: Strings, Recursion, Hashing (75 Problems)", day: 20, topic: "Hashing (Advanced)", details: "Longest consecutive sequence, Group anagrams", hours: 5, problemCount: 2, completed: false },
    { id: 21, week: 3, weekTitle: "Week 3: Strings, Recursion, Hashing (75 Problems)", day: 21, topic: "Revision & Mock Test", details: "Re-attempt tough problems, 1 mock interview", hours: 4, problemCount: 5, completed: false },
    // Week 4
    { id: 22, week: 4, weekTitle: "Week 4: Trees, Heaps (80 Problems)", day: 22, topic: "Trees (Traversals)", details: "Inorder/Preorder/Postorder, Level order", hours: 4, problemCount: 4, completed: false },
    { id: 23, week: 4, weekTitle: "Week 4: Trees, Heaps (80 Problems)", day: 23, topic: "Trees (BST)", details: "Search in BST, Validate BST, LCA in BST", hours: 5, problemCount: 3, completed: false },
    { id: 24, week: 4, weekTitle: "Week 4: Trees, Heaps (80 Problems)", day: 24, topic: "Trees (Advanced)", details: "Serialize/Deserialize, Flatten binary tree", hours: 5, problemCount: 2, completed: false },
    { id: 25, week: 4, weekTitle: "Week 4: Trees, Heaps (80 Problems)", day: 25, topic: "Heaps (Basics)", details: "Min/Max heap, Kth largest element", hours: 4, problemCount: 2, completed: false },
    { id: 26, week: 4, weekTitle: "Week 4: Trees, Heaps (80 Problems)", day: 26, topic: "Heaps (Advanced)", details: "Merge K sorted lists, Top K frequent elements", hours: 5, problemCount: 2, completed: false },
    { id: 27, week: 4, weekTitle: "Week 4: Trees, Heaps (80 Problems)", day: 27, topic: "Mixed Practice", details: "Solve 5-6 problems from past topics", hours: 5, problemCount: 6, completed: false },
    { id: 28, week: 4, weekTitle: "Week 4: Trees, Heaps (80 Problems)", day: 28, topic: "Revision & Mock Test", details: "Re-attempt tough problems, 1 mock interview", hours: 4, problemCount: 5, completed: false },
    // Week 5
    { id: 29, week: 5, weekTitle: "Week 5: Graphs (BFS/DFS), Tries (70 Problems)", day: 29, topic: "Graphs (BFS)", details: "Number of islands, Shortest path in unweighted graph", hours: 5, problemCount: 2, completed: false },
    { id: 30, week: 5, weekTitle: "Week 5: Graphs (BFS/DFS), Tries (70 Problems)", day: 30, topic: "Graphs (DFS)", details: "Detect cycle, Topological sort, Bipartite check", hours: 5, problemCount: 3, completed: false },
    { id: 31, week: 5, weekTitle: "Week 5: Graphs (BFS/DFS), Tries (70 Problems)", day: 31, topic: "Graphs (Advanced)", details: "Dijkstra's algo, Flood fill, Word ladder", hours: 5, problemCount: 3, completed: false },
    { id: 32, week: 5, weekTitle: "Week 5: Graphs (BFS/DFS), Tries (70 Problems)", day: 32, topic: "Tries", details: "Implement trie, Word search II, Longest common prefix", hours: 4, problemCount: 3, completed: false },
    { id: 33, week: 5, weekTitle: "Week 5: Graphs (BFS/DFS), Tries (70 Problems)", day: 33, topic: "Mixed Practice", details: "Solve 5-6 problems from past topics", hours: 5, problemCount: 6, completed: false },
    { id: 34, week: 5, weekTitle: "Week 5: Graphs (BFS/DFS), Tries (70 Problems)", day: 34, topic: "Revision & Mock Test", details: "Re-attempt tough problems, 1 mock interview", hours: 4, problemCount: 5, completed: false },
    // Week 6-7 (Treating as two weeks for structure)
    { id: 35, week: 6, weekTitle: "Week 6-7: Dynamic Programming (100 Problems)", day: 35, topic: "DP (1D Basics)", details: "Fibonacci, Climbing stairs, House robber", hours: 4, problemCount: 3, completed: false },
    { id: 36, week: 6, weekTitle: "Week 6-7: Dynamic Programming (100 Problems)", day: 36, topic: "DP (1D Advanced)", details: "Coin change, Knapsack problem", hours: 5, problemCount: 2, completed: false },
    { id: 37, week: 6, weekTitle: "Week 6-7: Dynamic Programming (100 Problems)", day: 37, topic: "DP (2D Basics)", details: "Longest common subsequence, Edit distance", hours: 5, problemCount: 2, completed: false },
    { id: 38, week: 6, weekTitle: "Week 6-7: Dynamic Programming (100 Problems)", day: 38, topic: "DP (2D Advanced)", details: "Matrix chain multiplication, Palindrome partitioning", hours: 5, problemCount: 2, completed: false },
    { id: 39, week: 6, weekTitle: "Week 6-7: Dynamic Programming (100 Problems)", day: 39, topic: "DP on Trees", details: "Diameter of tree, Max path sum", hours: 5, problemCount: 2, completed: false },
    { id: 40, week: 6, weekTitle: "Week 6-7: Dynamic Programming (100 Problems)", day: 40, topic: "DP on Graphs", details: "Bellman-Ford, Floyd-Warshall", hours: 5, problemCount: 2, completed: false },
    // Day 41-47 is tricky, splitting hours/problems roughly over 7 days for week 7
    { id: 41, week: 7, weekTitle: "Week 6-7: Dynamic Programming (100 Problems)", day: 41, topic: "DP Mastery", details: "Solve DP problems", hours: 5.5, problemCount: 12, completed: false },
     { id: 42, week: 7, weekTitle: "Week 6-7: Dynamic Programming (100 Problems)", day: 42, topic: "DP Mastery", details: "Solve DP problems", hours: 5.5, problemCount: 12, completed: false },
     { id: 43, week: 7, weekTitle: "Week 6-7: Dynamic Programming (100 Problems)", day: 43, topic: "DP Mastery", details: "Solve DP problems", hours: 5.5, problemCount: 12, completed: false },
     { id: 44, week: 7, weekTitle: "Week 6-7: Dynamic Programming (100 Problems)", day: 44, topic: "DP Mastery", details: "Solve DP problems", hours: 5.5, problemCount: 12, completed: false },
     { id: 45, week: 7, weekTitle: "Week 6-7: Dynamic Programming (100 Problems)", day: 45, topic: "DP Mastery", details: "Solve DP problems", hours: 5.5, problemCount: 12, completed: false },
     { id: 46, week: 7, weekTitle: "Week 6-7: Dynamic Programming (100 Problems)", day: 46, topic: "DP Mastery + Mock", details: "Solve DP problems, Mock Interview", hours: 5.5, problemCount: 12, completed: false },
     { id: 47, week: 7, weekTitle: "Week 6-7: Dynamic Programming (100 Problems)", day: 47, topic: "DP Mastery + Mock", details: "Solve DP problems, Mock Interview", hours: 5.5, problemCount: 12, completed: false },
    // Week 8
    { id: 48, week: 8, weekTitle: "Week 8: Advanced Topics & Final Prep (50 Problems)", day: 48, topic: "Bit Manipulation", details: "Single number, Count set bits, Power set", hours: 4, problemCount: 3, completed: false },
    { id: 49, week: 8, weekTitle: "Week 8: Advanced Topics & Final Prep (50 Problems)", day: 49, topic: "Math for DSA", details: "GCD, Prime numbers, Modular arithmetic", hours: 4, problemCount: 3, completed: false },
    { id: 50, week: 8, weekTitle: "Week 8: Advanced Topics & Final Prep (50 Problems)", day: 50, topic: "Greedy Algorithms", details: "Activity selection, Fractional knapsack", hours: 4, problemCount: 2, completed: false },
    { id: 51, week: 8, weekTitle: "Week 8: Advanced Topics & Final Prep (50 Problems)", day: 51, topic: "Backtracking", details: "N-Queens, Sudoku solver, Permutations", hours: 5, problemCount: 3, completed: false },
     // Day 52-59 combined, splitting hours/problems roughly over 8 days
    { id: 52, week: 8, weekTitle: "Week 8: Advanced Topics & Final Prep (50 Problems)", day: 52, topic: "Final Revision", details: "Re-attempt toughest problems", hours: 5.5, problemCount: 12, completed: false },
    { id: 53, week: 8, weekTitle: "Week 8: Advanced Topics & Final Prep (50 Problems)", day: 53, topic: "Final Revision", details: "Re-attempt toughest problems", hours: 5.5, problemCount: 12, completed: false },
    { id: 54, week: 8, weekTitle: "Week 8: Advanced Topics & Final Prep (50 Problems)", day: 54, topic: "Final Revision", details: "Re-attempt toughest problems", hours: 5.5, problemCount: 12, completed: false },
    { id: 55, week: 8, weekTitle: "Week 8: Advanced Topics & Final Prep (50 Problems)", day: 55, topic: "Final Revision", details: "Re-attempt toughest problems", hours: 5.5, problemCount: 12, completed: false },
    { id: 56, week: 8, weekTitle: "Week 8: Advanced Topics & Final Prep (50 Problems)", day: 56, topic: "Final Revision", details: "Re-attempt toughest problems", hours: 5.5, problemCount: 12, completed: false },
    { id: 57, week: 8, weekTitle: "Week 8: Advanced Topics & Final Prep (50 Problems)", day: 57, topic: "Final Revision", details: "Re-attempt toughest problems", hours: 5.5, problemCount: 12, completed: false },
    { id: 58, week: 8, weekTitle: "Week 8: Advanced Topics & Final Prep (50 Problems)", day: 58, topic: "Final Revision", details: "Re-attempt toughest problems", hours: 5.5, problemCount: 12, completed: false },
    { id: 59, week: 8, weekTitle: "Week 8: Advanced Topics & Final Prep (50 Problems)", day: 59, topic: "Final Revision", details: "Re-attempt toughest problems", hours: 5.5, problemCount: 12, completed: false },
    { id: 60, week: 8, weekTitle: "Week 8: Advanced Topics & Final Prep (50 Problems)", day: 60, topic: "Final Mock Interview", details: "Solve 3-4 hard problems in 90 mins (simulate real interview)", hours: 5, problemCount: 4, completed: false }
];
// Note: Problem counts per day are estimated to sum roughly to weekly totals. Hours are taken from the doc.

// --- DOM Elements ---
const taskListContainer = document.getElementById('taskListContainer');
const progressBar = document.getElementById('progressBar');
const daysCompletedStat = document.getElementById('daysCompletedStat');
const daysRemainingStat = document.getElementById('daysRemainingStat');
const hoursInvestedStat = document.getElementById('hoursInvestedStat');
const resetButton = document.getElementById('resetButton');
const weekFilterSelect = document.getElementById('weekFilterSelect'); 

// --- Local Storage Key ---
const STORAGE_KEY = 'dsaTrackerTasks_v2'; // Use a new key for the new structure
const OPEN_WEEKS_KEY = 'dsaTrackerOpenWeeks_v2';

// --- State ---
let currentTasks = []; // Holds the state of tasks

// --- Functions ---

/**
 * Loads tasks from local storage or uses the default tasks array.
 * @returns {Array} The array of task objects.
 */
function loadTasks() {
    const storedTasks = localStorage.getItem(STORAGE_KEY);
    if (storedTasks) {
        try {
            const parsedTasks = JSON.parse(storedTasks);
            // Basic validation: check if it's an array and length matches
            if (Array.isArray(parsedTasks) && parsedTasks.length === tasks.length) {
                 // Further validation: check if essential properties exist on the first item
                if (parsedTasks[0] && typeof parsedTasks[0].completed !== 'undefined' && typeof parsedTasks[0].id !== 'undefined') {
                     return parsedTasks;
                }
            }
            console.warn("Stored task data is invalid or structure mismatch. Resetting.");
            localStorage.removeItem(STORAGE_KEY); // Clear invalid data
        } catch (error) {
            console.error("Error parsing stored tasks:", error);
            localStorage.removeItem(STORAGE_KEY); // Clear corrupted data
        }
    }
     // Return a deep copy of the default tasks if nothing valid is stored
    return JSON.parse(JSON.stringify(tasks));
}

/**
 * Saves the current state of tasks to local storage.
 * @param {Array} tasksToSave - The array of task objects to save.
 */
function saveTasksState(tasksToSave) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasksToSave));
}

/**
 * Loads the state of open/closed weeks from local storage.
 * @returns {Set<number>} A Set containing the IDs of open weeks.
 */
function loadOpenWeeks() {
    const storedOpenWeeks = localStorage.getItem(OPEN_WEEKS_KEY);
    if (storedOpenWeeks) {
        try {
            const parsed = JSON.parse(storedOpenWeeks);
            // Ensure it's an array before creating a Set
            if (Array.isArray(parsed)) {
                return new Set(parsed);
            }
        } catch (error) {
            console.error("Error parsing open weeks state:", error);
        }
    }
    // Default: Keep week 1 open initially
    return new Set([1]);
}

/**
 * Saves the state of open/closed weeks to local storage.
 * @param {Set<number>} openWeeksSet - A Set containing the IDs of open weeks.
 */
function saveOpenWeeksState(openWeeksSet) {
    // Convert Set to Array for JSON serialization
    localStorage.setItem(OPEN_WEEKS_KEY, JSON.stringify(Array.from(openWeeksSet)));
}

/**
 * Populates the week filter dropdown based on available weeks in tasks.
 * @param {Array} tasksData - The array of all task objects.
 */
function populateWeekFilter(tasksData) {
    const weekNumbers = new Set(tasksData.map(task => task.week));
    const sortedWeeks = Array.from(weekNumbers).sort((a, b) => a - b);

    // Start from 1 to skip the default "View All Weeks" option
    for (let i = weekFilterSelect.options.length - 1; i >= 1; i--) {
        weekFilterSelect.remove(i);
    }

    sortedWeeks.forEach(weekNum => {
        const option = document.createElement('option');
        option.value = weekNum;
        // Fetch the title from the first task of that week
        const weekTitle = tasksData.find(task => task.week === weekNum)?.weekTitle || `Week ${weekNum}`;
        // Extract only the "Week X" part for brevity in the dropdown
        const weekLabel = weekTitle.match(/Week \d+/)?.[0] || `Week ${weekNum}`;
        option.textContent = weekLabel;
        weekFilterSelect.appendChild(option);
    });
}

/**
 * Updates the progress bar and statistics based on completed tasks.
 * @param {Array} tasksData - The array of task objects.
 */
function updateProgressAndStats(tasksData) {
    const totalTasks = tasksData.length;
    const completedTasks = tasksData.filter(task => task.completed);
    const completedCount = completedTasks.length;

    // Calculate Progress Percentage
    const percentage = totalTasks === 0 ? 0 : Math.round((completedCount / totalTasks) * 100);
    progressBar.style.width = `${percentage}%`;
    progressBar.textContent = `${percentage}%`;

    // Calculate Stats
    const daysCompleted = completedCount;
    const daysRemaining = totalTasks - completedCount;
    const hoursInvested = completedTasks.reduce((sum, task) => sum + (task.hours || 0), 0);
    

    // Update Stats Display
    daysCompletedStat.textContent = daysCompleted;
    daysRemainingStat.textContent = daysRemaining;
    hoursInvestedStat.textContent = hoursInvested.toFixed(1); // Show one decimal for hours like 5.5
    
}

/**
 * Handles the change event when a checkbox is clicked.
 * @param {Event} event - The event object.
 */
function handleTaskToggle(event) {
    const taskId = parseInt(event.target.dataset.taskId, 10);
    const taskIndex = currentTasks.findIndex(task => task.id === taskId);

    if (taskIndex !== -1) {
        // Toggle completion status in the main state array
        currentTasks[taskIndex].completed = event.target.checked;

        // Update visual style of the specific task item
        const taskElement = event.target.closest('.task-item');
        if (taskElement) { // Ensure the element exists
            if (currentTasks[taskIndex].completed) {
                taskElement.classList.add('completed');
            } else {
                taskElement.classList.remove('completed');
            }
        } else {
             console.warn(`Task element not found for ID: ${taskId}`);
        }


        // Update progress bar and stats
        updateProgressAndStats(currentTasks);

        // Save updated tasks state to local storage
        saveTasksState(currentTasks);
    } else {
        console.error("Task not found for ID:", taskId);
    }
}

 /**
 * Handles clicking on a week header to toggle its content visibility.
 * @param {Event} event - The click event object.
 * @param {Set<number>} openWeeksSet - The Set tracking open weeks.
 */
function handleWeekToggle(event, openWeeksSet) {
    const header = event.currentTarget;
    const content = header.nextElementSibling;
    const weekId = parseInt(header.dataset.weekId, 10);

    if (content && content.classList.contains('week-content')) {
        const isOpen = content.classList.toggle('open');
        header.classList.toggle('open', isOpen); // Add 'open' class to header too if needed for styling toggle icon

         // Update the set of open weeks
        if (isOpen) {
            openWeeksSet.add(weekId);
        } else {
            openWeeksSet.delete(weekId);
        }
         // Save the updated open weeks state
        saveOpenWeeksState(openWeeksSet);

    } else {
        console.error("Could not find week content element for header:", header);
    }
}

/**
 * Renders the task list, optionally filtered by week.
 * @param {Array} tasksToRender - The array of task objects to display.
 * @param {Set<number>} openWeeksSet - The Set indicating which weeks should be open initially.
 * @param {string|number} filterWeek - The specific week to filter by ('all' or a week number).
 */
function renderTaskList(tasksToRender, openWeeksSet, filterWeek = 'all') {
    taskListContainer.innerHTML = ''; // Clear existing list
    const tasksByWeek = {};

    // Filter tasks if a specific week is selected
    const filteredTasks = filterWeek === 'all'
        ? tasksToRender
        : tasksToRender.filter(task => task.week === parseInt(filterWeek, 10));

    // Group tasks by week
    filteredTasks.forEach(task => {
        if (!tasksByWeek[task.week]) {
            tasksByWeek[task.week] = {
                title: task.weekTitle,
                tasks: []
            };
        }
        tasksByWeek[task.week].tasks.push(task);
    });

    // Determine which weeks should be open based on the filter
    const effectiveOpenWeeks = filterWeek === 'all'
        ? openWeeksSet
        : new Set(Object.keys(tasksByWeek).map(Number)); // Open the filtered week(s)

    // Render each week section
    Object.keys(tasksByWeek).sort((a, b) => a - b).forEach(weekKey => {
        const weekData = tasksByWeek[weekKey];
        const weekId = parseInt(weekKey, 10); // Ensure weekKey is a number
        const isInitiallyOpen = effectiveOpenWeeks.has(weekId);

        const weekSection = document.createElement('div');
        weekSection.className = 'bg-white rounded-lg shadow-md overflow-hidden'; // Container for header and content

        // Create Week Header
        const weekHeader = document.createElement('div');
        weekHeader.className = `week-header p-3 md:p-4 border-b border-gray-200 flex justify-between items-center ${isInitiallyOpen ? 'open' : ''}`;
        weekHeader.dataset.weekId = weekId; // Store week ID for toggling
        weekHeader.innerHTML = `
            <h2 class="text-lg font-semibold text-gray-700">${weekData.title}</h2>
            <i class="fas fa-chevron-right toggle-icon text-gray-500"></i> `;

        // Create Week Content (tasks)
        const weekContent = document.createElement('div');
        weekContent.className = `week-content ${isInitiallyOpen ? 'open' : ''}`; // Add 'open' class if needed

        const taskList = document.createElement('div');
        taskList.className = 'divide-y divide-gray-100'; // Separators between tasks

        weekData.tasks.forEach(task => {
            const taskElement = document.createElement('div');
            taskElement.className = `task-item p-3 flex items-start gap-3 ${task.completed ? 'completed' : ''}`; // Use items-start for better alignment if text wraps
            const checkboxId = `task-${task.id}`;

            taskElement.innerHTML = `
                <div class="flex items-center pt-1"> <input
                        type="checkbox"
                        id="${checkboxId}"
                        data-task-id="${task.id}"
                        class="custom-checkbox"
                        ${task.completed ? 'checked' : ''}
                    >
                    <span class="text-sm font-medium text-gray-500 w-6 text-right mr-1">${task.day}</span> </div>
                <label for="${checkboxId}" class="flex-grow cursor-pointer task-details">
                    <span class="font-medium text-gray-800">${task.topic}</span> -
                    <span class="text-sm text-gray-600">${task.details}</span>
                </label>
                <span class="text-sm text-gray-500 font-medium ml-auto pl-2 flex-shrink-0">${task.hours} hrs</span> `;

            // Add event listener to the checkbox
            const checkbox = taskElement.querySelector(`#${checkboxId}`);
            checkbox.addEventListener('change', handleTaskToggle); // No need to pass tasks array anymore

            taskList.appendChild(taskElement);
        });

        weekContent.appendChild(taskList);
        weekSection.appendChild(weekHeader);
        weekSection.appendChild(weekContent);
        taskListContainer.appendChild(weekSection);

        // Add event listener for toggling the week section
        // When filtering, toggling is disabled visually, but we still need the handler for 'all' view
         weekHeader.addEventListener('click', (event) => {
             // Only allow toggling if not filtering to a specific week
             if (filterWeek === 'all') {
                 handleWeekToggle(event, openWeeksSet);
             }
         });
         // Add/remove cursor pointer based on filter state
         if (filterWeek !== 'all') {
             weekHeader.style.cursor = 'default';
             const icon = weekHeader.querySelector('.toggle-icon');
             if (icon) icon.style.display = 'none'; // Hide toggle icon when filtering
         } else {
             weekHeader.style.cursor = 'pointer';
              const icon = weekHeader.querySelector('.toggle-icon');
             if (icon) icon.style.display = ''; // Show toggle icon
         }
    });
}

/**
 * Resets all task progress.
 */
function resetProgress() {
     if (confirm("Are you sure you want to reset all progress? This cannot be undone.")) {
        // Create a fresh copy of the default tasks
        currentTasks = JSON.parse(JSON.stringify(tasks));
        // Clear open weeks state (default to week 1 open)
        const openWeeksSet = new Set([1]);
        saveOpenWeeksState(openWeeksSet);
        // Save the reset state
        saveTasksState(currentTasks);
        // Re-render the UI
        renderTaskList(currentTasks, openWeeksSet);
        updateProgressAndStats(currentTasks);
        console.log("Progress reset.");
    }
}


// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    currentTasks = loadTasks();         // Load tasks state
    const openWeeks = loadOpenWeeks();  // Load open weeks state
    populateWeekFilter(tasks);          // Populate the dropdown
    renderTaskList(currentTasks, openWeeks, weekFilterSelect.value); // Initial render based on dropdown
    updateProgressAndStats(currentTasks); // Update stats and progress bar

    // Add event listener for the reset button
    resetButton.addEventListener('click', resetProgress);

    // Add event listener for the week filter dropdown
    weekFilterSelect.addEventListener('change', (event) => {
        const selectedWeek = event.target.value;
        // Re-render the list based on the selected week
        // Pass the original openWeeks set; renderTaskList decides how to use it based on filter
        renderTaskList(currentTasks, openWeeks, selectedWeek);
    });

    // Theme toggle logic
    const themeToggle = document.getElementById('themeToggle');
    const THEME_KEY   = 'dsaTrackerTheme';

    function loadTheme() {
        const stored = localStorage.getItem(THEME_KEY);
        return stored === 'dark' || stored === 'light' ? stored : 'light';
    }
    function applyTheme(theme) {
        if (theme === 'dark') {
            document.body.classList.add('dark');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            document.body.classList.remove('dark');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
    }
    function saveTheme(theme) {
        localStorage.setItem(THEME_KEY, theme);
    }

    // initialize
    let currentTheme = loadTheme();
    applyTheme(currentTheme);

    themeToggle.addEventListener('click', () => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(currentTheme);
        saveTheme(currentTheme);
    });
});
