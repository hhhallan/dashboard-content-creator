'use client';

import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { InstagramIcon, Music, YoutubeIcon } from 'lucide-react';
import { videos } from '../data/video';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader } from './ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';

export const TableRecentVideos = () => {
  const recentVideos = videos.slice(0, 5);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'published':
        return <Badge variant="success">Publié</Badge>;
      case 'scheduled':
        return <Badge variant="programmed">Programmé</Badge>;
      case 'failed':
        return <Badge variant="destructive">Échec</Badge>;
      default:
        return <Badge variant="secondary">Brouillon</Badge>;
    }
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'tiktok':
        return <Music className="size-5" />;
      case 'instagram':
        return <InstagramIcon className="size-5 text-pink-500" />;
      case 'youtube':
        return <YoutubeIcon className="size-5 text-red-600" />;
      default:
        return null;
    }
  };

  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl font-bold">Vidéos récentes</h2>
        <p className="text-foreground/55 text-sm">
          Aperçu de vos dernières publications
        </p>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Vidéo</TableHead>
              <TableHead>Plateformes</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Vues</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentVideos.map((video, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-muted rounded-md flex items-center justify-center text-lg">
                      {video.thumbnail}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium truncate">
                        {video.title}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    {video.platforms.map(platform => (
                      <div key={platform} className="flex items-center">
                        {getPlatformIcon(platform)}
                      </div>
                    ))}
                  </div>
                </TableCell>
                <TableCell>{getStatusBadge(video.status)}</TableCell>
                <TableCell>
                  {format(new Date(video.publishDate), 'dd MMM yyyy', {
                    locale: fr,
                  })}
                </TableCell>
                <TableCell className="text-right">
                  {video.views.toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
