import { onNavigate } from '$app/navigation';

export const convertToSlug = (input) => {
  return input.toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
}

export const prettyUrl = (input) => {
  return input.replace(/(^\w+:|^)\/\//, '')
}

export const formatDate = (input) => {
  let date = new Date(input)
  return date.toLocaleDateString("en-US", {
    year: 'numeric',
    month: 'long',
  })
}

export const preparePageTransition = () => {
	onNavigate(async (navigation) => {
		if (!document.startViewTransition) {
			return;
		}

		return new Promise((oldStateCaptureResolve) => {
			document.startViewTransition(async () => {
				oldStateCaptureResolve();
				await navigation.complete;
			});
		});
	});
};
