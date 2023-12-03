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
