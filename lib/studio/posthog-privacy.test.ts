import type { CaptureResult } from 'posthog-js';
import { describe, expect, it } from 'vitest';
import { filterPrivateCreatorEvent } from './posthog-privacy';

describe('PostHog private creator boundary', () => {
  it.each(['$autocapture', '$snapshot', '$exception', '$rageclick'])('drops %s on the creator route', (event) => {
    expect(filterPrivateCreatorEvent(capture(event, 'https://ytgify.com/video-to-gif'))).toBeNull();
    expect(filterPrivateCreatorEvent(capture(event, 'https://ytgify.com/studio'))).toBeNull();
  });

  it('allows only explicit Studio events on creator routes', () => {
    const event = capture('studio_export_succeeded', 'https://ytgify.com/video-to-gif/?utm_source=private');
    event.properties!.$referrer = 'https://search.example/private?q=secret';
    event.properties!.$raw_user_agent = 'browser fingerprint';
    event.properties!.$geoip_postal_code = '85331';
    event.properties!.$geoip_latitude = 33.8874;
    event.properties!.$geoip_longitude = -111.9508;
    expect(filterPrivateCreatorEvent(event)).toEqual({
      ...event,
      properties: {
        $current_url: 'https://ytgify.com/video-to-gif',
        $geoip_disable: true,
      },
    });
  });

  it('does not alter ordinary site events away from the creator', () => {
    const event = capture('$pageview', 'https://ytgify.com/blog');
    expect(filterPrivateCreatorEvent(event)).toBe(event);
  });
});

function capture(event: string, currentUrl: string): CaptureResult {
  return {
    uuid: '00000000-0000-4000-8000-000000000000',
    event,
    properties: { $current_url: currentUrl },
  } as CaptureResult;
}
