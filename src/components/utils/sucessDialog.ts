import Swal from 'sweetalert2';

export function sucessDialog(title: string, text: string, icon: 'success') {
  Swal.fire({
    title,
    text,
    icon,
  });
}
