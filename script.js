<!-- Add this JavaScript code inside the <script> tag before the </body> tag -->
<script>
  const users = [
    // Replace this array with the actual user data fetched from the API
    // Each user should be an object with properties: id, name, email, role
    // Example:
    // { id: 1, name: 'John Doe', email: 'john@mail.com', role: 'admin' }
  ];

  const itemsPerPage = 10;
  let currentPage = 1;

  function renderTable() {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentUsers = users.slice(startIndex, endIndex);

    currentUsers.forEach(user => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.role}</td>
        <td>
          <button class="edit-button" onclick="editUser(${user.id})"></button>
          <button class="delete-button" onclick="deleteUser(${user.id})"></button>
        </td>
      `;
      tbody.appendChild(row);
    });
  }

  function renderPagination() {
    const paginationContainer = document.querySelector('.pagination');
    paginationContainer.innerHTML = '';

    const totalPages = Math.ceil(users.length / itemsPerPage);

    for (let i = 1; i <= totalPages; i++) {
      const button = document.createElement('button');
      button.textContent = i;
      button.addEventListener('click', () => {
        currentPage = i;
        renderTable();
        renderPagination();
      });
      paginationContainer.appendChild(button);
    }
  }

  function editUser(userId) {
    // Implement edit functionality here
    console.log(`Edit user with ID: ${userId}`);
  }

  function deleteUser(userId) {
    // Implement delete functionality here
    console.log(`Delete user with ID: ${userId}`);
  }

  // Initial render
  renderTable();
  renderPagination();
</script>
<!-- Add this JavaScript code after the previous script -->
<script>
  let selectedRows = [];

  function searchUsers(query) {
    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(query.toLowerCase()) ||
      user.email.toLowerCase().includes(query.toLowerCase()) ||
      user.role.toLowerCase().includes(query.toLowerCase())
    );
    
    currentPage = 1;
    users.length = 0;
    users.push(...filteredUsers);

    renderTable();
    renderPagination();
  }

  function toggleSelectAllRows() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    selectedRows = [];

    checkboxes.forEach(checkbox => {
      checkbox.checked = !checkbox.checked;
      if (checkbox.checked) {
        selectedRows.push(parseInt(checkbox.value));
      }
    });
  }

  function deleteSelectedRows() {
    // Implement delete functionality for selected rows
    console.log('Delete selected rows:', selectedRows);
  }
</script>
<!-- Add this JavaScript code after the previous script -->
<script>
  let selectedRows = [];

  function searchUsers(query) {
    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(query.toLowerCase()) ||
      user.email.toLowerCase().includes(query.toLowerCase()) ||
      user.role.toLowerCase().includes(query.toLowerCase())
    );
    
    currentPage = 1;
    users.length = 0;
    users.push(...filteredUsers);

    renderTable();
    renderPagination();
  }

  function toggleSelectAllRows() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    selectedRows = [];

    checkboxes.forEach(checkbox => {
      checkbox.checked = !checkbox.checked;
      if (checkbox.checked) {
        selectedRows.push(parseInt(checkbox.value));
      }
    });
  }

  function deleteSelectedRows() {
    // Implement delete functionality for selected rows
    console.log('Delete selected rows:', selectedRows);
  }
</script>
<!-- Update the JavaScript code after the previous script -->
<script>
  let editingRowId = null;

  function editUser(userId) {
    if (editingRowId !== null) {
      // Finish editing the currently editing row before starting a new one
      saveEditChanges();
    }

    editingRowId = userId;
    renderTable();
  }

  function saveEditChanges() {
    // Implement save functionality for edited row
    console.log(`Save changes for user with ID: ${editingRowId}`);
    editingRowId = null;
    renderTable();
  }

  function cancelEdit() {
    // Implement cancel functionality for edited row
    console.log(`Cancel changes for user with ID: ${editingRowId}`);
    editingRowId = null;
    renderTable();
  }
</script>
<!-- Update the renderTable function in the existing script -->
<script>
  function renderTable() {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentUsers = users.slice(startIndex, endIndex);

    currentUsers.forEach(user => {
      const row = document.createElement('tr');

      if (user.id === editingRowId) {
        // Render editable fields when row is being edited
        row.innerHTML = `
          <td><input type="text" value="${user.name}"></td>
          <td><input type="text" value="${user.email}"></td>
          <td><input type="text" value="${user.role}"></td>
          <td>
            <button class="edit-button" onclick="saveEditChanges()">Save</button>
            <button class="delete-button" onclick="cancelEdit()">Cancel</button>
          </td>
        `;
      } else {
        // Render normal row with "Edit" button
        row.innerHTML = `
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${user.role}</td>
          <td>
            <button class="edit-button" onclick="editUser(${user.id})"></button>
            <button class="delete-button" onclick="deleteUser(${user.id})"></button>
          </td>
        `;
      }

      tbody.appendChild(row);
    });
  }
</script>
<!-- Update the JavaScript code after the previous script -->
<script>
  // Placeholder for the API request to fetch user data
  async function fetchUserData() // Placeholder for the API request to fetch user data
async function fetchUserData() {
  // Simulating an API call with a delay
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'Aaron Miles', email: 'aaron@mailinator.com', role: 'member' },
        { id: 2, name: 'Aishwarya Naik', email: 'aishwarya@mailinator.com', role: 'member' },
        { id: 3, name: 'Arvind Kumar', email: 'arvind@mailinator.com', role: 'admin' },
        { id: 4, name: 'Caterina Binotto', email: 'caterina@mailinator.com', role: 'member' },
        { id: 5, name: 'Chetan Kumar', email: 'chetan@mailinator.com', role: 'member' },
        { id: 6, name: 'Jim McClain', email: 'jim@mailinator.com', role: 'member' },
        { id: 7, name: 'Mahaveer Singh', email: 'mahaveer@mailinator.com', role: 'member' },
        { id: 8, name: 'Rahul Jain', email: 'rahul@mailinator.com', role: 'admin' },
        { id: 9, name: 'Rizan Khan', email: 'rizan@mailinator.com', role: 'member' },
        { id: 10, name: 'Sarah Potter', email: 'sarah@mailinator.com', role: 'admin' },
        { id: 11, name: 'Keshav Muddaiah', email: 'keshav@mailinator.com', role: 'member' },
        { id: 12, name: 'Nita Ramesh', email: 'nita@mailinator.com', role: 'member' },
        { id: 13, name: 'Julia Hunstman', email: 'julia@mailinator.com', role: 'member' },
        { id: 14, name: 'Juan Alonso', email: 'juan@mailinator.com', role: 'admin' },
        { id: 15, name: 'Gabriel Montoya', email: 'gabriel@mailinator.com', role: 'admin' },
        { id: 16, name: 'Beatrice Iglesias', email: 'beatrice@mailinator.com', role: 'admin' },
        { id: 17, name: 'Sarah Symms', email: 'sarah.s@mailinator.com', role: 'admin' },
        { id: 18, name: 'Patrick Pinheiro', email: 'patrick@mailinator.com', role: 'admin' },
        { id: 19, name: 'Anand Patel', email: 'anand@mailinator.com', role: 'member' },
        { id: 20, name: 'Kishore Kalburgi', email: 'kishore@mailinator.com', role: 'member' },
        // Add more user data as needed
      ]);
    }, 1000); // Simulated delay of 1 second
  });
}
{
    // Simulating an API call with a delay
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          // Replace this array with the actual user data fetched from the API
          // Each user should be an object with properties: id, name, email, role
          // Example:
          // { id: 1, name: 'John Doe', email: 'john@mail.com', role: 'admin' }
        ]);
      }, 1000); // Simulated delay of 1 second
    });
  }

  async function init() {
    users.push(...await fetchUserData());
    renderTable();
    renderPagination();
  }

  // Initial setup
  init();
</script>
<!-- Add this JavaScript code after the previous script -->
<script>
  let selectedRows = [];

  // ... (existing code)

  function deleteSelectedRows() {
    // Remove selected rows from the users array
    users = users.filter(user => !selectedRows.includes(user.id));

    // Clear the selectedRows array
    selectedRows = [];

    // Render the updated table and pagination
    renderTable();
    renderPagination();
  }
</script>
<!-- Update the renderTable function in the existing script -->
<script>
  function renderTable() {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentUsers = users.slice(startIndex, endIndex);

    currentUsers.forEach(user => {
      const row = document.createElement('tr');

      if (user.id === editingRowId) {
        // ... (existing code)
      } else {
        // Update this part to include a checkbox for row selection
        row.innerHTML = `
          <td><input type="checkbox" value="${user.id}" onchange="toggleSelectRow(${user.id})"></td>
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${user.role}</td>
          <td>
            <button class="edit-button" onclick="editUser(${user.id})"></button>
            <button class="delete-button" onclick="deleteUser(${user.id})"></button>
          </td>
        `;
      }

      tbody.appendChild(row);
    });
  }

  // New function to toggle selection of a row
  function toggleSelectRow(userId) {
    if (selectedRows.includes(userId)) {
      // Deselect the row if it's already selected
      selectedRows = selectedRows.filter(id => id !== userId);
    } else {
      // Select the row if it's not selected
      selectedRows.push(userId);
    }
  }
</script>
<!-- Add this JavaScript code after the previous script -->
<script>
  let searchQuery = '';

  // ... (existing code)

  function search() {
    // Get the search input value
    const searchInput = document.getElementById('search-input');
    searchQuery = searchInput.value.toLowerCase().trim();

    // Render the updated table and pagination
    renderTable();
    renderPagination();
  }
</script>
<!-- Update the renderTable function in the existing script -->
<script>
  function renderTable() {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Filter users based on search query
    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(searchQuery) ||
      user.email.toLowerCase().includes(searchQuery) ||
      user.role.toLowerCase().includes(searchQuery)
    );

    const currentUsers = filteredUsers.slice(startIndex, endIndex);

    currentUsers.forEach(user => {
      const row = document.createElement('tr');

      if (user.id === editingRowId) {
        // ... (existing code)
      } else {
        // Update this part to include a checkbox for row selection
        row.innerHTML = `
          <td><input type="checkbox" value="${user.id}" onchange="toggleSelectRow(${user.id})"></td>
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${user.role}</td>
          <td>
            <button class="edit-button" onclick="editUser(${user.id})"></button>
            <button class="delete-button" onclick="deleteUser(${user.id})"></button>
          </td>
        `;
      }

      tbody.appendChild(row);
    });
  }
</script>
<!-- Add this JavaScript code after the previous script -->
<script>
  // ... (existing code)

  function goToPage(pageNumber) {
    currentPage = pageNumber;

    // Render the updated table and pagination
    renderTable();
    renderPagination();
  }

  function renderPagination() {
    const paginationContainer = document.querySelector('.pagination');
    paginationContainer.innerHTML = '';

    const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

    for (let i = 1; i <= totalPages; i++) {
      const button = document.createElement('button');
      button.textContent = i;
      button.addEventListener('click', () => goToPage(i));
      paginationContainer.appendChild(button);
    }

    // Add buttons for first, previous, next, and last pages
    const firstButton = document.createElement('button');
    firstButton.textContent = 'First';
    firstButton.addEventListener('click', () => goToPage(1));
    paginationContainer.appendChild(firstButton);

    const prevButton = document.createElement('button');
    prevButton.textContent = 'Previous';
    prevButton.addEventListener('click', () => {
      if (currentPage > 1) {
        goToPage(currentPage - 1);
      }
    });
    paginationContainer.appendChild(prevButton);

    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.addEventListener('click', () => {
      if (currentPage < totalPages) {
        goToPage(currentPage + 1);
      }
    });
    paginationContainer.appendChild(nextButton);

    const lastButton = document.createElement('button');
    lastButton.textContent = 'Last';
    lastButton.addEventListener('click', () => goToPage(totalPages));
    paginationContainer.appendChild(lastButton);
  }
</script>
<!-- Add this JavaScript code after the previous script -->
<script>
  let editingRowId = null;

  // ... (existing code)

  function editUser(userId) {
    editingRowId = userId;
    renderTable();
  }

  function saveUser(userId) {
    const editedName = document.getElementById(`edit-name-${userId}`).value;
    const editedEmail = document.getElementById(`edit-email-${userId}`).value;
    const editedRole = document.getElementById(`edit-role-${userId}`).value;

    // Find the user in the array and update their information
    const editedUser = users.find(user => user.id === userId);
    if (editedUser) {
      editedUser.name = editedName;
      editedUser.email = editedEmail;
      editedUser.role = editedRole;
    }

    editingRowId = null;
    renderTable();
  }

  // ... (existing code)
</script>
<!-- Update the renderTable function in the existing script -->
<script>
  function renderTable() {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currentUsers = filteredUsers.slice(startIndex, endIndex);

    currentUsers.forEach(user => {
      const row = document.createElement('tr');

      if (user.id === editingRowId) {
        // Render editable fields and save button
        row.innerHTML = `
          <td></td>
          <td><input type="text" id="edit-name-${user.id}" value="${user.name}"></td>
          <td><input type="text" id="edit-email-${user.id}" value="${user.email}"></td>
          <td><input type="text" id="edit-role-${user.id}" value="${user.role}"></td>
          <td>
            <button class="save-button" onclick="saveUser(${user.id})">Save</button>
          </td>
        `;
      } else {
        // Render non-editable fields
        row.innerHTML = `
          <td><input type="checkbox" value="${user.id}" onchange="toggleSelectRow(${user.id})"></td>
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${user.role}</td>
          <td>
            <button class="edit-button" onclick="editUser(${user.id})"></button>
            <button class="delete-button" onclick="deleteUser(${user.id})"></button>
          </td>
        `;
      }

      tbody.appendChild(row);
    });
  }
</script>



