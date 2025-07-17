import {
  Dialog,
  DialogTitle,
  DialogContent,
  Stack,
  Button,
  Avatar,
  Box,
} from "@mui/material";
import { romanianBanks } from "../data/romanianBanks";

export default function BankSelectorModal({ open, onClose, onSelect }) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>Select your bank</DialogTitle>
      <DialogContent>
        <Stack spacing={2} sx={{ mt: 1 }}>
          {romanianBanks.map((bank) => (
            <Button
              key={bank.id}
              variant="outlined"
              onClick={() => onSelect(bank.id)}
              fullWidth
              sx={{
                justifyContent: "flex-start",
                padding: 1.5,
                borderRadius: 2,
                textTransform: "none",
                fontWeight: 500,
                gap: 2,
              }}
            >
              <Avatar src={bank.logo} alt={bank.name} sx={{ width: 24, height: 24 }} />
              {bank.name}
            </Button>
          ))}
        </Stack>
        <Box sx={{ height: 12 }} />
      </DialogContent>
    </Dialog>
  );
}
