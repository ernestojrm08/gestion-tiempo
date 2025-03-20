document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("crearUsuarioForm");

    // Crear usuario
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;

        const res = await fetch("/api/usuarios", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nombre, email })
        });

        if (res.ok) location.reload();
    });

    // Editar usuario
    document.querySelectorAll(".editar").forEach(btn => {
        btn.addEventListener("click", async () => {
            const id = btn.getAttribute("data-id");
            const nuevoNombre = prompt("Nuevo nombre:");
            if (!nuevoNombre) return;

            const res = await fetch(`/api/usuarios/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nombre: nuevoNombre })
            });

            if (res.ok) location.reload();
        });
    });

    // Eliminar usuario
    document.querySelectorAll(".eliminar").forEach(btn => {
        btn.addEventListener("click", async () => {
            const id = btn.getAttribute("data-id");
            if (!confirm("¿Seguro que quieres eliminar este usuario?")) return;

            const res = await fetch(`/api/usuarios/${id}`, { method: "DELETE" });

            if (res.ok) location.reload();
        });
    });
});
