document.addEventListener('DOMContentLoaded', function() {
    // Sidebar Toggle
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const adminSidebar = document.querySelector('.admin-sidebar');
    const adminMain = document.querySelector('.admin-main');
    
    sidebarToggle.addEventListener('click', function() {
        adminSidebar.classList.toggle('active');
        adminMain.classList.toggle('active');
    });
    
    // Responsive Sidebar
    function handleSidebar() {
        if (window.innerWidth < 992) {
            adminSidebar.classList.remove('active');
            adminMain.classList.remove('active');
        } else {
            adminSidebar.classList.add('active');
            adminMain.classList.add('active');
        }
    }
    
    // Initialize sidebar state
    handleSidebar();
    
    // Update on resize
    window.addEventListener('resize', handleSidebar);
    
    // Notification Dropdown (would be implemented with actual notifications)
    const notificationBtn = document.querySelector('.notification-btn');
    
    notificationBtn.addEventListener('click', function() {
        // In a real implementation, this would show a dropdown with notifications
        alert('Notifications dropdown would appear here');
    });
    
    // User Profile Dropdown (would be implemented)
    const userProfile = document.querySelector('.user-profile');
    
    userProfile.addEventListener('click', function() {
        // In a real implementation, this would show a dropdown with user options
        alert('User profile dropdown would appear here');
    });
    
    // Quick Action Buttons
    const quickBtns = document.querySelectorAll('.quick-btn');
    
    quickBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const action = this.querySelector('span').textContent;
            alert(`This would open the ${action} interface`);
        });
    });
    
    // Table Row Actions
    const editBtns = document.querySelectorAll('.action-btn.edit');
    const deleteBtns = document.querySelectorAll('.action-btn.delete');
    
    editBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const postId = this.closest('tr').querySelector('td:first-child').textContent;
            alert(`This would open edit interface for post ID: ${postId}`);
        });
    });
    
    deleteBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const postId = this.closest('tr').querySelector('td:first-child').textContent;
            if (confirm(`Are you sure you want to delete post ID: ${postId}?`)) {
                alert(`Post ID: ${postId} would be deleted`);
                // In real implementation, this would make an API call to delete
                this.closest('tr').remove();
            }
        });
    });
    
    // Table Row Click (for viewing details)
    const tableRows = document.querySelectorAll('.data-table tbody tr');
    
    tableRows.forEach(row => {
        row.addEventListener('click', function() {
            const postId = this.querySelector('td:first-child').textContent;
            alert(`This would open view details for post ID: ${postId}`);
        });
    });
    
    // Simulate loading data (in a real app, this would be API calls)
    function loadDashboardData() {
        console.log('Loading dashboard data...');
        // Simulate API call delay
        setTimeout(() => {
            // Update stats or other dynamic content
            console.log('Dashboard data loaded');
        }, 1000);
    }
    
    // Initialize dashboard
    loadDashboardData();
});
