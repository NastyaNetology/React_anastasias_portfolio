import React from "react";
import { Card, CardContent } from "../components/ui/Card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/Tabs";
import { Table, TableHead, TableRow, TableCell, TableBody } from "../components/ui/Table";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";


const trafficData = [
  { name: "IU", visits: 351263 },
  { name: "Freie U.", visits: 2912000 },
  { name: "TU Berlin", visits: 881975 },
  { name: "UE", visits: 234338 },
  { name: "SHR", visits: 238705 },
];

const ProjectOverview = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Web App: Advertising Events</h1>
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
  <TabsTrigger value="User Stories">User Stories</TabsTrigger>
          <TabsTrigger value="data">Data & Metrics</TabsTrigger>
          <TabsTrigger value="diagram">Activity Diagram</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardContent className="p-4 space-y-2">
              <h2 className="text-xl font-semibold mt-2">Client Goals</h2>
              <p>Advertise a list of all academic events from three universities with campuses in
                Berlin to attract more participants from campuses and outside.</p>

              <h2 className="text-xl font-semibold mt-2">System Features</h2>
                <ul className="list-disc pl-6 mt-2">
                  <li>Web application to publish and advertise events.</li>
                  <li>Verification of users from campuses and outside via university email.</li>
                  <li>Subscription to category events for users.</li>
                  <li>Analysis of historical data about successful events.</li>
                  <li>Checking workload for distribution in tree branches and open registration places.</li>
                  <li>Access to transport by Google Maps.</li>
                </ul>
                <h2 className="text-xl font-semibold mt-2">Normal Behavior of the system</h2>
                <ul className="list-disc pl-6 mt-2">
                  <li>Users have to easily surf the events on the website, register, pay and personally manage their interests and notifications.</li>
                  <li>Admins have to easily publish evets, see reports and manage advertisements based on analysis of user's interests.</li>
                </ul>
            </CardContent>
          </Card>
        </TabsContent>
<TabsContent value="User Stories">
  <Card>
    <CardContent className="p-4 space-y-2">
      <h2 className="text-xl font-semibold mt-8 mb-4">User Stories</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Role</TableCell>
            <TableCell>User Story</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {/* Researchers */}
          <TableRow>
            <TableCell>Researcher</TableCell>
            <TableCell>As a researcher, I want to register for academic events so that I can present my work and network.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Researcher</TableCell>
            <TableCell>As a researcher, I want to subscribe to topic-specific events so I get notified about relevant sessions.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Researcher</TableCell>
            <TableCell>As a researcher, I want to share events with colleagues so they can attend too.</TableCell>
          </TableRow>

          {/* Students & Postgrads */}
          <TableRow>
            <TableCell>Student</TableCell>
            <TableCell>As a student, I want to log in using my university email so that I can access student-only content.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Student</TableCell>
            <TableCell>As a student, I want to register and pay for events online so that I can attend hassle-free.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Student</TableCell>
            <TableCell>As a student, I want to manage notifications so I stay updated on events of interest.</TableCell>
          </TableRow>

          {/* Professors */}
          <TableRow>
            <TableCell>Professor</TableCell>
            <TableCell>As a professor, I want to request the creation of events so I can organize academic sessions.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Professor</TableCell>
            <TableCell>As a professor, I want to view attendance reports to evaluate participation in my events.</TableCell>
          </TableRow>

          {/* Admins */}
          <TableRow>
            <TableCell>Admin</TableCell>
            <TableCell>As an admin, I want to approve events so that only verified content is published.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Admin</TableCell>
            <TableCell>As an admin, I want to send announcements and notifications to users to keep them engaged.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Admin</TableCell>
            <TableCell>As an admin, I want to generate reports so I can monitor platform activity.</TableCell>
          </TableRow>

          {/* Generic Users */}
          <TableRow>
            <TableCell>User</TableCell>
            <TableCell>As a user, I want to search for academic events by category and date so I can find relevant ones easily.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>User</TableCell>
            <TableCell>As a user, I want to pin favorite events to review them later.</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>User</TableCell>
            <TableCell>As a user, I want to download event PDFs so I can access information offline.</TableCell>
          </TableRow>

        </TableBody>
      </Table>
    </CardContent>
  </Card>
</TabsContent>



        <TabsContent value="data">
          <Card>
            <CardContent className="p-4 space-y-4">
              <h2 className="text-xl font-semibold">Traffic & Audience Analysis</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={trafficData} margin={{top: 10, right: 30, left: 60, bottom: 5}}>
                  <XAxis dataKey="name"/>
                  <YAxis/>
                  <Tooltip/>
                  <Bar dataKey="visits" fill="#8884d8"/>
                </BarChart>
              </ResponsiveContainer>
              <p className="text-sm text-gray-600">Based on average monthly visits per university (source:
                SimilarWeb)</p>
              <Card>
                <CardContent className="p-4 space-y-2">
                  <h2 className="text-xl font-semibold">Market Industry Analysis </h2>
                  <ul className="list-disc pl-6">
                    <li>The average number of target audiences for the entire site is 923K (inside and outside the
                      county).
                    </li>
                    <li>60% of the audience comes from mobile devices, so we must have a good mobile layout.</li>
                    <li>On average, the audience views 2.5 pages; the main information should be on 2-3 pages.</li>
                    <li>The average number of audiences within the country is 50% - 570K.</li>
                    <li>70% of social media traffic comes from LinkedIn and YouTube, we need to promote our web platform
                      there 2. Email trafic is only 0.5%; to achieve the goal, we must use other channels: Social
                      networks (LinkedIn, YouTube), Referral links on different platforms, including from our university
                      websites.
                    </li>
                  </ul>
                </CardContent>
              </Card>

            </CardContent>
          </Card>
        </TabsContent>


    <TabsContent value="diagram">
  <div className="flex justify-center p-4">
    <img
      src="/ASD.jpg"
      alt="Activity Diagram"
      className="max-w-full rounded shadow-lg"
    />
  </div>
</TabsContent>
      </Tabs>
    </div>
  );
};

export default ProjectOverview;