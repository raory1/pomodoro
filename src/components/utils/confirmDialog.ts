import Swal from 'sweetalert2';

export async function showConfirmDialog(title: string, text: string) {
  const result = await Swal.fire({
    title,
    text,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#30197b',
    cancelButtonColor: '#991b1b',
    confirmButtonText: 'Yes, delete it!',
  });

  return result.isConfirmed;
}
