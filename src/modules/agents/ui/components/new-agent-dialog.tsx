import { ResponsiveDialog } from "@/components/responsive-dialog";
import { AgentForm } from "./agent-from";
interface NewAgentsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
export const NewAgentsDialog = ({
  open,
  onOpenChange,
}: NewAgentsDialogProps) => {
  return (
    <ResponsiveDialog
      title="New Agent"
      description="Create a new Agent"
      open={open}
      onOpenChange={onOpenChange}
    >
      <AgentForm
        onSuccess={() => onOpenChange(false)}
        onCancel={() => onOpenChange(false)}
      />
    </ResponsiveDialog>
  );
};
